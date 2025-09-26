type Props = {
  imgUrl: string;
  alt: string;
  cardId:string;
};

export const DiagonalRoundedImage = ({ imgUrl, alt, cardId}: Props) => {
  return (
    <svg
      width="306"
      height="337"
      viewBox="0 0 346 417"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <defs>
        <pattern id={cardId} patternUnits="userSpaceOnUse" width="346" height="417">
          <image
            href={imgUrl}
            x="0"
            y="0"
            width="346"
            height="417"
            preserveAspectRatio="xMidYMid slice"
            aria-label={alt}
          />
        </pattern>
      </defs>

      <path
        d="M0 397V20C0 8.9543 8.9543 0 20 0H253.833C258.769 0 263.531 1.82552 267.202 5.12531L338.804 69.4817C343.062 73.309 345.476 78.7776 345.434 84.5028L343.145 397.146C343.065 408.135 334.134 417 323.146 417H20C8.9543 417 0 408.046 0 397Z"
        fill={`url(#${cardId}`}
      />
    </svg>
  );
};
