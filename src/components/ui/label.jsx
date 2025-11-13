import React from "react";

export function Label({ htmlFor, children, className = "", ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`ui-label ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}