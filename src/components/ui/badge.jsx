import React from "react";

export function Badge({ children, variant = "secondary", className = "" }) {
  
  let classes = "ui-badge";

  if (variant === "destructive") {
    classes += " ui-badge-destructive";
  } else {
    classes += " ui-badge-secondary"; // Padrão
  }

  return (
    <span className={`${classes} ${className}`}>
      {children}
    </span>
  );
}