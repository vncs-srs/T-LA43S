import React from "react";
export function Select({ children, className = "", ...props }) {
  return (
    <select
      className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}
export function SelectContent({ children, className = "", ...props }) {
  return (
    <div
      className={`mt-1 bg-white border border-gray-300 rounded-md shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function SelectItem({ children, className = "", ...props }) {
  return (
    <option
      className={`px-3 py-2 hover:bg-gray-100 ${className}`}
      {...props}
    >
      {children}
    </option>
  );
}
export function SelectTrigger({ children, className = "", ...props }) {
  return (
    <div
      className={`inline-block w-full cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function SelectValue({ children, className = "", ...props }) {
  return (
    <span
      className={`block w-full ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}