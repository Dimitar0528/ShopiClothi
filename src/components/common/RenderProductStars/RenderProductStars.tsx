export const RenderProductStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(rating)) {
      // Full star
      return (
        <i
          title={`${rating} out of 5`}
          key={i}
          className="fa fa-star"
          aria-hidden="true"
        />
      );
    } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
      // Half star
      return (
        <i
          title={`${rating} out of 5`}
          key={i}
          className="fa fa-star-half-o"
          aria-hidden="true"
        />
      );
    } else {
      // Empty star
      return (
        <i
          title={`${rating} out of 5`}
          key={i}
          className="fa fa-star grey"
          aria-hidden="true"
        />
      );
    }
  });
};
