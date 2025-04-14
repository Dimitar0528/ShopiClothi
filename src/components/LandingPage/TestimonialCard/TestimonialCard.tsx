import "./TestimonialCard.css";
import { RenderProductStars } from "../../common/RenderProductStars/RenderProductStars";
import { TestimonialCardProps } from "../../../types/components";

export default function TestimonialCard({
  quote,
  author,
  location,
  rating,
}: TestimonialCardProps) {

  return (
    <div className="testimonial-card">
      <div className="rating">{RenderProductStars(rating)}</div>
      <blockquote className="testimonial-quote">"{quote}"</blockquote>
      <div className="testimonial-author">
        <p className="author-name">{author}</p>
        <p className="author-location">{location}</p>
      </div>
    </div>
  );
}
