import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`border rounded-lg shadow-sm p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function CardContent({ children, className = "", ...props }) {
  return (
    <div
      className={`mb-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function CardFooter({ children, className = "", ...props }) {
  return (
    <div
      className={`pt-4 border-t ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function CardHeader({ children, className = "", ...props }) {
  return (
    <div
      className={`mb-4 border-b pb-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function CardTitle({ children, className = "", ...props }) {
  return (
    <h2
      className={`text-lg font-semibold ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
export function CardDescription({ children, className = "", ...props }) {
  return (
    <p
      className={`text-sm text-gray-500 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}