import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`ui-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function CardContent({ children, className = "", ...props }) {
  return (
    <div
      className={`ui-card-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function CardFooter({ children, className = "", ...props }) {
  return (
    <div
      className={`ui-card-footer ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function CardHeader({ children, className = "", ...props }) {
  return (
    <div
      className={`ui-card-header ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function CardTitle({ children, className = "", ...props }) {
  return (
    <h2
      className={`ui-card-title ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
export function CardDescription({ children, className = "", ...props }) {
  return (
    <p
      className={`ui-card-description ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}