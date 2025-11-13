import React from "react";

export function Input({ type = "text", className = "", ...props }) {
  return (
    <input
      type={type}
      className={`ui-input ${className}`}
      {...props}
    />
  );
}