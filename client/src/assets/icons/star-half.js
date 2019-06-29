import React from "react";

const SVG = ({
    style = {},
    className = "",
    fill = "",
    size = "1em"
}) => (
    <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        width={ size }
        height={ size }
        viewBox="0 0 32 32"
        className={ className }
        stroke = { fill }
        fill = { fill }
    >
        <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798zM16 23.547l-0.029 0.015 0.029-17.837 3.492 7.075 7.807 1.134-5.65 5.507 1.334 7.776-6.983-3.671z"></path>
    </svg>
);

export default SVG;