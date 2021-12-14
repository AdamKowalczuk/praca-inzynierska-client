import React from "react";
import { Link } from "react-router-dom";

export default function Offline() {
  return (
    <div className="fallback">
      <h5 className="fallback-header">OOPS!</h5>
      <p className="fallback-content">
        Currently you cant view this page without a connection.
      </p>
      <Link to="/">
        <button>Go back to Home</button>
      </Link>
    </div>
  );
}
