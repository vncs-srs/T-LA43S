import React from "react";
// Checkbox component
export function Checkbox({ checked, onChange, label, className = "", ...props }) {
  return (
    <label className={`inline-flex items-center space-x-2 ${className}`}>
      <input
        type="checkbox"
        className="form-checkbox text-blue-500"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}