import { FeatureCardProps } from "../../../types/components";
import "./FeatureCard.css"

export default function FeatureCard({
    cardBorderGradient, 
    cardIconGradient,
    cardIcon,
    cardTitle,
    cartContent
}: FeatureCardProps)
 {
    return (
      <div className="feature-card">
        <div className={`card-border ${cardBorderGradient}`}></div>
        <div className="card-content">
          <div className={`icon-container ${cardIconGradient}`}>
            <i className={`${cardIcon}`}></i>
          </div>
          <h3 className="card-title">{cardTitle}</h3>
          <p className="card-text">{cartContent}</p>
        </div>
      </div>
    );
}