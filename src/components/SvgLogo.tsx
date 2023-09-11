import * as React from "react";

function SvgLogo(props: any) {
  return (
    <svg
      width="403px"
      height="135px"
      viewBox="0 0 403 135"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <image
        width={403}
        height={135}
        xlinkHref="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgLogo;
