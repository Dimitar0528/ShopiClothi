import { useEffect, useRef, useState } from "react";
import "./NetworkAnimation.css";

// Interface Definitions
interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
  fact?: FashionFact;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  width: number;
  ttl: number;
}

interface FashionFact {
  title: string;
  content: string;
}

// Utility Functions
const getRandomElement = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const calculateDistance = (node1: Node, node2: Node): number => {
  return Math.sqrt(
    Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
  );
};

const NetworkAnimation = () => {
  // Refs and States
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [fashionFacts, setFashionFacts] = useState<FashionFact[]>([]);

  // Ref-based variables for animation state
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationFrameRef = useRef<number>(0);
  const lastUpdateTimeRef = useRef<number>(0);
  const nextNodeIdRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);

  // Constants for Canvas and Animation
  const NODE_COUNT_DENSITY = 27500;
  const NODE_RADIUS_MIN = 3;
  const NODE_RADIUS_MAX_ADDITION = 3;
  const NODE_VELOCITY_SCALE = 0.5;
  const NODE_VELOCITY_CHANGE_CHANCE = 0.01;
  const NODE_MAX_SPEED = 0.6;
  const CONNECTION_OPACITY_MIN = 0.1;
  const CONNECTION_OPACITY_MAX_ADDITION = 0.4;
  const CONNECTION_WIDTH_MIN = 0.5;
  const CONNECTION_WIDTH_MAX_ADDITION = 1;
  const CONNECTION_TTL_MIN = 500;
  const CONNECTION_TTL_MAX_ADDITION = 500;
  const CONNECTION_FADE_TTL = 100;
  const CONNECTION_ADDITION_CHANCE = 0.04;
  const MAX_CONNECTION_LENGTH = 150;
  const NODE_ADDITION_CHANCE = 0.02;
  const NODE_POPULATION_REMOVE_CHANCE = 0.78;
  const NODE_POPULATION_ADD_CHANCE = 0.35;
  const NODE_HORIZONTAL_OFFSET = 140;
  const NODE_TOP_OFFSET = 140;
  const NODE_HOVER_RADIUS = 10;
  const MAX_ADDITIONAL_CONNECTIONS_RATIO = 0.2;

  // Colors
  const PURPLE_COLOR = "rgba(123, 31, 152, ";
  const VIOLET_COLOR = "rgba(103, 58, 183, ";
  const PINK_COLOR = "rgba(244, 143, 147, ";
  const NODE_COLORS = [
    "rgba(123, 31, 152, 0.9)",
    "rgba(103, 58, 183, 0.9)",
    "rgba(244, 143, 147, 0.9)",
  ];

  // Effects
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || isMobileDevice());
    };

    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fetchFashionFacts = async () => {
      try {
        const response = await fetch("fashion_facts.txt");
        const text = await response.text();
        const lines = text.split("\n");
        const facts: FashionFact[] = lines
          .map((line) => {
            const [title, content] = line.split(" - ");
            return {
              title: title?.trim() || "",
              content: content?.trim() || "",
            };
          })
          .filter((fact) => fact.title && fact.content);
        setFashionFacts(facts);
      } catch (error) {
        console.error("Failed to fetch fashion facts:", error);
        setFashionFacts([]);
      }
    };
    fetchFashionFacts();
  }, []);

  useEffect(() => {
    if (isMobile || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const initializeNetwork = () => {
      nodesRef.current = [];
      connectionsRef.current = [];
      nextNodeIdRef.current = 0;

      const nodeCount = Math.floor(
        (canvas.width * canvas.height) / NODE_COUNT_DENSITY
      );
      for (let i = 0; i < nodeCount; i++) {
        createRandomNode();
      }

      createRandomConnections();
    };

    const createRandomNode = (): Node => {
      const id = nextNodeIdRef.current++;
      const node: Node = {
        id,
        x:
          Math.random() * (canvas.width - 2 * NODE_HORIZONTAL_OFFSET) +
          NODE_HORIZONTAL_OFFSET,
        y:
          Math.random() * (canvas.height - 2 * NODE_TOP_OFFSET) +
          NODE_TOP_OFFSET,
        radius: Math.random() * NODE_RADIUS_MAX_ADDITION + NODE_RADIUS_MIN,
        velocityX: (Math.random() - 0.5) * NODE_VELOCITY_SCALE,
        velocityY: (Math.random() - 0.5) * NODE_VELOCITY_SCALE,
        fact: getRandomElement(fashionFacts),
      };

      nodesRef.current.push(node);
      return node;
    };

    const createRandomConnections = () => {
      const nodes = nodesRef.current;
      const existingConnections = [...connectionsRef.current];
      const connectedNodes = new Set<number>();
      const maxAdditionalConnections = Math.floor(
        nodes.length * MAX_ADDITIONAL_CONNECTIONS_RATIO
      );
      const numAdditionalConnections = Math.floor(
        Math.random() * maxAdditionalConnections
      );

      nodes.forEach((node) => {
        if (
          existingConnections.some(
            (c) => c.from === node.id || c.to === node.id
          )
        ) {
          connectedNodes.add(node.id);
          return;
        }

        const availableNodes = nodes.filter((n) => n.id !== node.id);
        const closeNodes = availableNodes.filter(
          (n) => calculateDistance(node, n) <= MAX_CONNECTION_LENGTH
        );

        if (closeNodes.length > 0) {
          const targetNode = getRandomElement(closeNodes);

          connectionsRef.current.push({
            from: node.id,
            to: targetNode.id,
            opacity:
              Math.random() * CONNECTION_OPACITY_MAX_ADDITION +
              CONNECTION_OPACITY_MIN,
            width:
              Math.random() * CONNECTION_WIDTH_MAX_ADDITION +
              CONNECTION_WIDTH_MIN,
            ttl:
              Math.random() * CONNECTION_TTL_MAX_ADDITION + CONNECTION_TTL_MIN,
          });

          connectedNodes.add(node.id);
          connectedNodes.add(targetNode.id);
        }
      });

      for (let i = 0; i < numAdditionalConnections; i++) {
        if (nodes.length < 2) break;

        const fromIndex = Math.floor(Math.random() * nodes.length);
        const fromNode = nodes[fromIndex];

        const availableNodes = nodes.filter((n) => {
          if (n.id === fromNode.id) return false;

          return !connectionsRef.current.some(
            (conn) =>
              (conn.from === fromNode.id && conn.to === n.id) ||
              (conn.from === n.id && conn.to === fromNode.id)
          );
        });

        const closeNodes = availableNodes.filter(
          (n) => calculateDistance(fromNode, n) <= MAX_CONNECTION_LENGTH
        );

        if (closeNodes.length > 0) {
          const toNode = getRandomElement(closeNodes);

          connectionsRef.current.push({
            from: fromNode.id,
            to: toNode.id,
            opacity:
              Math.random() * CONNECTION_OPACITY_MAX_ADDITION +
              CONNECTION_OPACITY_MIN,
            width:
              Math.random() * CONNECTION_WIDTH_MAX_ADDITION +
              CONNECTION_WIDTH_MIN,
            ttl:
              Math.random() * CONNECTION_TTL_MAX_ADDITION + CONNECTION_TTL_MIN,
          });
        }
      }
    };

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;

      const deltaTime = timestamp - (lastUpdateTimeRef.current || timestamp);
      lastUpdateTimeRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawConnections(ctx);
      drawNodes(ctx);

      if (!isPausedRef.current) {
        updateConnections(deltaTime);
        updateNodes(deltaTime);
        if (Math.random() < NODE_ADDITION_CHANCE) {
          manageNetworkPopulation();
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const updateNodes = (deltaTime: number) => {
      const nodes = nodesRef.current;
      const adjustedDelta = deltaTime / 16;

      nodes.forEach((node) => {
        node.x += node.velocityX * adjustedDelta;
        node.y += node.velocityY * adjustedDelta;

        if (
          node.x < NODE_HORIZONTAL_OFFSET ||
          node.x > canvas.width - NODE_HORIZONTAL_OFFSET
        ) {
          node.velocityX *= -1;
          node.x = Math.max(
            NODE_HORIZONTAL_OFFSET,
            Math.min(node.x, canvas.width - NODE_HORIZONTAL_OFFSET)
          );
        }

        if (node.y < NODE_TOP_OFFSET || node.y > canvas.height) {
          node.velocityY *= -1;
          node.y = Math.max(NODE_TOP_OFFSET, Math.min(node.y, canvas.height));
        }

        if (Math.random() < NODE_VELOCITY_CHANGE_CHANCE) {
          node.velocityX += (Math.random() - 0.5) * 0.03;
          node.velocityY += (Math.random() - 0.5) * 0.03;

          const speed = Math.sqrt(
            node.velocityX * node.velocityX + node.velocityY * node.velocityY
          );
          if (speed > NODE_MAX_SPEED) {
            node.velocityX = (node.velocityX / speed) * NODE_MAX_SPEED;
            node.velocityY = (node.velocityY / speed) * NODE_MAX_SPEED;
          }
        }
      });
    };

    const updateConnections = (deltaTime: number) => {
      const adjustedDelta = deltaTime / 16;

      connectionsRef.current = connectionsRef.current.filter((conn) => {
        conn.ttl -= adjustedDelta;

        if (conn.ttl < CONNECTION_FADE_TTL) {
          conn.opacity *= 0.98;
        }

        return conn.ttl > 0;
      });

      if (Math.random() < CONNECTION_ADDITION_CHANCE) {
        createRandomConnections();
      }
    };

    const getConnectedNodeIds = (nodeId: number): Set<number> => {
      const connectedIds = new Set<number>();

      connectionsRef.current.forEach((conn) => {
        if (conn.from === nodeId) {
          connectedIds.add(conn.to);
        } else if (conn.to === nodeId) {
          connectedIds.add(conn.from);
        }
      });

      return connectedIds;
    };

    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      const nodes = nodesRef.current;

      connectionsRef.current.forEach((conn) => {
        const fromNode = nodes.find((n) => n.id === conn.from);
        const toNode = nodes.find((n) => n.id === conn.to);

        if (fromNode && toNode) {
          const gradient = ctx.createLinearGradient(
            fromNode.x,
            fromNode.y,
            toNode.x,
            toNode.y
          );

          const colorIndex = (conn.from + conn.to) % 3;
          let colorStart, colorEnd;

          switch (colorIndex) {
            case 0:
              colorStart = PURPLE_COLOR;
              colorEnd = VIOLET_COLOR;
              break;
            case 1:
              colorStart = VIOLET_COLOR;
              colorEnd = PINK_COLOR;
              break;
            default:
              colorStart = PINK_COLOR;
              colorEnd = PURPLE_COLOR;
          }

          const isConnectedToHovered =
            hoveredNode &&
            (conn.from === hoveredNode.id || conn.to === hoveredNode.id);

          const opacity = isConnectedToHovered
            ? Math.min(conn.opacity * 1.5, 1.0)
            : conn.opacity;
          const lineWidth = isConnectedToHovered
            ? conn.width * 1.5
            : conn.width;

          gradient.addColorStop(0, colorStart + opacity + ")");
          gradient.addColorStop(1, colorEnd + opacity + ")");

          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
      });
    };

    const drawNodes = (ctx: CanvasRenderingContext2D) => {
      const connectedNodeIds = hoveredNode
        ? getConnectedNodeIds(hoveredNode.id)
        : new Set<number>();

      nodesRef.current.forEach((node) => {
        const isHovered = hoveredNode && hoveredNode.id === node.id;
        const isConnected = hoveredNode && connectedNodeIds.has(node.id);

        ctx.beginPath();

        if (isHovered) {
          ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
          ctx.shadowBlur = 15;
          ctx.arc(node.x, node.y, node.radius * 1.5, 0, Math.PI * 2);
        } else if (isConnected) {
          ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
          ctx.shadowBlur = 8;
          ctx.arc(node.x, node.y, node.radius * 1.2, 0, Math.PI * 2);
        } else {
          ctx.shadowBlur = 0;
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        }

        const nodeScale = isHovered ? 1.5 : isConnected ? 1.2 : 1;
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * nodeScale
        );

        const color = NODE_COLORS[node.id % NODE_COLORS.length];
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.2)");

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.shadowBlur = 0;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let isOverNode = false;
      const sortedNodes = [...nodesRef.current].sort(
        (a, b) => b.radius - a.radius
      );

      for (const node of sortedNodes) {
        const distance = Math.sqrt(
          Math.pow(mouseX - node.x, 2) + Math.pow(mouseY - node.y, 2)
        );

        if (distance <= NODE_HOVER_RADIUS) {
          isOverNode = true;

          if (!hoveredNode || hoveredNode.id !== node.id) {
            setHoveredNode(node);
            isPausedRef.current = true;
            setTooltipPosition({ x: node.x, y: node.y });
            canvas.style.cursor = "pointer";
          }
          break;
        }
      }

      if (!isOverNode) {
        setHoveredNode(null);
        isPausedRef.current = false;
        canvas.style.cursor = "default";
      }
    };

    const handleClick = () => {
      if (hoveredNode) {
        setHoveredNode(null);
        isPausedRef.current = false;
        canvas.style.cursor = "default";
      }
    };

    const manageNetworkPopulation = () => {
      const nodes = nodesRef.current;
      const maxNodes = Math.floor((canvas.width * canvas.height) / 13800);
      if (Math.random() > NODE_POPULATION_REMOVE_CHANCE && nodes.length > 25) {
        const removeIndex = Math.floor(Math.random() * nodes.length);
        const nodeIdToRemove = nodes[removeIndex].id;

        nodesRef.current.splice(removeIndex, 1);
        connectionsRef.current = connectionsRef.current.filter(
          (conn) => conn.from !== nodeIdToRemove && conn.to !== nodeIdToRemove
        );
      } else if (
        nodes.length < maxNodes &&
        Math.random() < NODE_POPULATION_ADD_CHANCE
      ) {
        createRandomNode();
      }
    };

    initializeNetwork();
    animationFrameRef.current = requestAnimationFrame(animate);

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isMobile, fashionFacts]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      {hoveredNode && (
        <div
          ref={tooltipRef}
          className="fashion-fact-tooltip"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y}px`,
          }}>
          <h3>{hoveredNode.fact?.title}</h3>
          <p>{hoveredNode.fact?.content}</p>
          <div className="tooltip-arrow"></div>
        </div>
      )}
      <div className="network-animation-container">
        <canvas ref={canvasRef} className="network-canvas"></canvas>
      </div>
    </>
  );
};

export default NetworkAnimation;
