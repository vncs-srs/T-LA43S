import React from "react";

export function Separator({ className = "", ...props }) {
  return (
    <hr
      className={`ui-separator ${className}`}
      {...props}
    />
  );
}