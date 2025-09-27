type Props = {
  imgUrl: string;
  alt: string;
  cardId: string;
  bottomTitleLength:number;
};

export const DiagonalRoundedImage = ({ imgUrl, alt, cardId, bottomTitleLength }: Props) => {
  console.log(bottomTitleLength)
  const bottomCutOptionsByTitleLength = {
    default:`
        H121.5
        V385.5
        C121.5 374.454 130.454 365.5 141.5 365.5

        H325 
        C336.046 365.5 345 356.546 
    `,
    moreThanSix:`
        H51.5
        V385.5
        C51.5 374.454 60.454 365.5 71.5 365.5
        
        H325 
        C336.046 365.5 345 356.546 
    `,
    moreThanSeven:`
        H121.5
        V365.5
        C121.5 354.454 130.454 345.5 141.5 345.5
        
        H336 
        C346.046 345.5 355 316.546  
    `,
  }
  const returnCurrentCardCutSize = (bottomTitleLength:number) => {
    if (bottomTitleLength > 7) return bottomCutOptionsByTitleLength.moreThanSeven
    if (bottomTitleLength > 6) return bottomCutOptionsByTitleLength.moreThanSix
    return bottomCutOptionsByTitleLength.default
  }
  return (
    <svg
      width="299"
      height="400"
      viewBox="0 0 345 400"
      xmlns="http://www.w3.org/2000/svg"
      className="block"
    >
      <defs>
        <pattern id={cardId} patternUnits="userSpaceOnUse" width="345" height="415">
          <image
            href={imgUrl}
            x="0"
            y="0"
            width="345"
            height="415"
            preserveAspectRatio="xMidYMid slice"
            aria-label={alt}
          />
        </pattern>
      </defs>

      <path
        d={`M20 0C8.9543 0 0 8.95431 0 20V394.5C0 405.546 8.95431 414.5 20 414.5
        ${returnCurrentCardCutSize(bottomTitleLength)}
        345 345.5 V85.4073C345 79.7375 342.594 74.3342 338.379 70.5414L265.705 5.13412C262.032 1.82888 257.266 0 252.325 0H20Z`}
        fill={`url(#${cardId})`}
      />
    </svg>

  );
};
