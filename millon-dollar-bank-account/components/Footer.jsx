import React from "react";

export default function Footer({ verify }) {
  return (
    <footer>
      {verify ? (
        <p>
          <span>Current Balance:</span> $1,000,000
        </p>
      ) : (
        ""
      )}
    </footer>
  );
}
