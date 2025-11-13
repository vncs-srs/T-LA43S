import React, { createContext, useContext } from "react";

const RadioGroupContext = createContext();

export function RadioGroup({ children, value, onValueChange, className, ...props }) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

export function RadioGroupItem({ value, id, ...props }) {
  const context = useContext(RadioGroupContext);
  
  return (
    <input
      type="radio"
      id={id}
      value={value}
      checked={context.value === value}
      onChange={(e) => context.onValueChange(e.target.value)}
      {...props}
    />
  );
}