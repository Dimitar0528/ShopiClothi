import { useEffect } from "react";
import { useLocation } from "react-router";
/**
 * A custom hook to dynamically update the document title based on the url search bar location .
 * 
 * 
 */
export default function useDynamicTitle() {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname
            .replace(/-/g, " ") // Replace dashes with spaces for readability
            .replace(/\//g, " ") // Remove slashes
            .trim();

        const formattedTitle = path
            ? path
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize words
                .join(" ")
            : "Home"; // Default title for root path

        document.title = `${formattedTitle} - ShopiClothi`;
    }, [location.pathname]);
}
