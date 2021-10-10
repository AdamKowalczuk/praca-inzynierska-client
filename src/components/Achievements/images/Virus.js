import React from "react";

const Virus = (props) => {
  return (
    <>
      <svg id="bold" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
          fill={props.primaryColor}
        />
        <g fill={props.color}>
          <path d="m14.667 24c-.735 0-1.333-.598-1.333-1.333s.598-1.333 1.333-1.333 1.333.597 1.333 1.333c0 .735-.598 1.333-1.333 1.333zm0-1.333h.007zm0 0h.007zm0 0h.007zm0-.001h.007zm0 0h.007zm0 0h.007zm0 0h.007z" />
          <path d="m10 14c-.735 0-1.333-.598-1.333-1.333s.598-1.334 1.333-1.334 1.333.598 1.333 1.333-.598 1.334-1.333 1.334zm0-1.333h.007zm0 0h.007zm0 0h.007zm0-.001h.007zm0 0h.007zm0 0h.007zm0 0h.007z" />
          <path d="m9.667 21.333c-.919 0-1.667-.747-1.667-1.666s.748-1.667 1.667-1.667 1.667.748 1.667 1.667-.748 1.666-1.667 1.666z" />
          <path d="m22 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
          <path d="m21.667 24c-1.286 0-2.333-1.047-2.333-2.333s1.047-2.333 2.333-2.333 2.333 1.046 2.333 2.333-1.047 2.333-2.333 2.333z" />
          <path d="m15 11.333c-.919 0-1.667-.748-1.667-1.667 0-.918.748-1.666 1.667-1.666s1.667.748 1.667 1.667-.748 1.666-1.667 1.666z" />
          <path d="m19.782 20.725-2.227-2.227c-.26-.26-.26-.682 0-.943s.682-.26.943 0l2.227 2.227c.26.26.26.682 0 .943-.261.26-.683.26-.943 0z" />
          <path d="m17.649 13.891c-.245-.275-.221-.696.053-.941l2.613-2.333c.275-.244.696-.221.941.053.245.275.221.696-.053.941l-2.613 2.333c-.274.245-.694.222-.941-.053z" />
          <path d="m14.146 21.586.387-2.72c.052-.365.388-.618.754-.566.365.052.618.389.566.754l-.387 2.72c-.125.883-1.443.684-1.32-.188z" />
          <path d="m14.637 12.433-.187-1.707c-.04-.366.224-.695.59-.735.363-.04.695.224.735.59l.187 1.707c.04.366-.224.695-.59.735-.372.039-.695-.229-.735-.59z" />
          <path d="m10.225 19.296c-.204-.307-.121-.72.186-.924l2.113-1.407c.306-.204.72-.122.924.186.204.307.121.72-.186.924l-2.113 1.407c-.306.204-.72.121-.924-.186z" />
          <path d="m12.408 14.696-1.84-.973c-.325-.172-.45-.576-.277-.901.172-.325.575-.45.901-.277l1.84.973c.325.172.45.576.277.901-.172.326-.576.449-.901.277z" />
        </g>
        <path
          d="m15.667 19.333c-2.022 0-3.667-1.645-3.667-3.667s1.645-3.666 3.667-3.666 3.667 1.645 3.667 3.667-1.646 3.666-3.667 3.666z"
          fill={props.color}
        />
      </svg>
    </>
  );
};

export default Virus;