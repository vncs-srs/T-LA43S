import React from "react";

export function Button({ children, variant = "default", className = "", ...props }) {
  // Classe base do index.css
  const baseClasses = "ui-button";
  
  // Mapeia as variantes para as classes do index.css
  const variantClasses = {
    default: "ui-button-default",
    outline: "ui-button-outline",
    ghost: "ui-button-ghost",
    link: "ui-button-link",
    icon: "ui-button-icon", // icones no footer não estão funcionando verificar depois
    // Adiciona a variante destructive
    destructive: "ui-button-destructive", 
  }[variant];

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}