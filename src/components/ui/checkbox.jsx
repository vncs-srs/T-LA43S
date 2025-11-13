import React from "react";

export function Checkbox({ id, checked, onCheckedChange, ...props }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      {...props}
    />
  );
}