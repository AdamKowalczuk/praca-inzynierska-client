import React from "react";

const Launch = (props) => {
  return (
    <>
      <svg id="bold" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
          fill={props.primaryColor}
        />
        <path
          d="m11.167 19.282c-.077 0-.154-.018-.225-.053-.169-.085-.275-.258-.275-.447v-6.575c0-.337.092-.667.268-.954l.518-.851c.322-.501 1.111-.491 1.421-.009l.525.86c.175.287.268.617.268.954v5.095c0 .159-.075.308-.202.402l-2 1.48c-.089.065-.194.098-.298.098zm2-1.979h.007z"
          fill={props.color}
        />
        <path
          d="m20.833 19.282c-.105 0-.21-.033-.298-.098l-2-1.48c-.128-.094-.202-.243-.202-.402v-5.095c0-.337.092-.667.268-.954l.518-.851c.322-.501 1.111-.491 1.421-.009l.525.86c.175.287.268.617.268.954v6.575c0 .189-.106.362-.275.447-.071.036-.148.053-.225.053z"
          fill={props.color}
        />
        <g fill={props.color}>
          <path d="m14.833 24.003c-.827 0-1.5-.673-1.5-1.5v-2c0-.643.523-1.167 1.167-1.167h.667c.643 0 1.167.523 1.167 1.167v2c-.001.827-.674 1.5-1.501 1.5z" />
          <path d="m17.167 24.003c-.827 0-1.5-.673-1.5-1.5v-2c0-.643.523-1.167 1.167-1.167h.666c.643 0 1.167.523 1.167 1.167v2c0 .827-.674 1.5-1.5 1.5z" />
          <path d="m13.667 22.669h-2.667c-.919 0-1.667-.748-1.667-1.667v-.452c0-.571.287-1.096.768-1.404l.98-.627c1.583-1.013 2.712-2.648 3.1-4.487.076-.36.432-.59.79-.515.36.076.591.429.515.79-.46 2.187-1.803 4.131-3.686 5.335l-.98.627c-.096.062-.154.166-.154.281v.453c0 .184.15.333.333.333h2.667c.368 0 .667.299.667.667s-.298.666-.666.666z" />
          <path d="m21 22.669h-2.667c-.368 0-.667-.299-.667-.667s.298-.667.667-.667h2.667c.184 0 .333-.149.333-.333v-.452c0-.114-.057-.219-.154-.281l-.98-.627c-1.882-1.204-3.225-3.149-3.686-5.335-.076-.36.155-.714.515-.79.358-.075.714.155.79.515.387 1.839 1.517 3.474 3.1 4.487l.98.627c.481.308.768.832.768 1.404v.453c.001.918-.747 1.666-1.666 1.666z" />
          <path d="m13.333 17.503c-.368 0-.667-.299-.667-.667v-3.176c0-1.647.619-3.239 1.698-4.367l.952-.995c.362-.38 1.005-.381 1.368.001l.951.994c1.079 1.129 1.698 2.721 1.698 4.368v3.009c0 .368-.298.667-.667.667-.368 0-.667-.299-.667-.667v-3.01c0-1.307-.484-2.563-1.328-3.446l-.671-.702-.672.702c-.844.883-1.328 2.139-1.328 3.446v3.176c0 .368-.298.667-.667.667zm2.387-8.284c0 .001.001.001 0 0z" />
          <path d="m17.24 12.551-.456-.759c-.344-.571-1.225-.572-1.57.001l-.455.758c-.497.829-.759 1.778-.759 2.744v4.374c0 .368.298.667.667.667.368 0 .667-.299.667-.667v-4h1.333v4c0 .368.298.667.667.667.368 0 .667-.299.667-.667v-4.374c-.001-.966-.263-1.915-.761-2.744z" />
        </g>
      </svg>
    </>
  );
};

export default Launch;