import React from "react";

export function RadioGroup({ children, className = "", ...props }) {
  return (
    <div
      className={`flex flex-col space-y-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export function RadioGroupItem({ children, className = "", ...props }) {
  return (
    <label className={`inline-flex items-center space-x-2 ${className}`}>
      <input
        type="radio"
        className="form-radio text-blue-500"
        {...props}
      />
      <span>{children}</span>
    </label>
  );
}