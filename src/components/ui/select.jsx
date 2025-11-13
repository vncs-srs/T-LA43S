import React from "react";

// O SelectTrigger apenas renderiza o children, 
// permitindo que o <select> nativo seja estilizado.
export function SelectTrigger({ children }) {
  return <>{children}</>;
}

export function SelectValue({ placeholder }) {
  // O placeholder não é usado no <select> nativo, 
  // mas podemos ter uma option desabilitada
  return null;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ children, value }) {
  return <option value={value}>{children}</option>;
}

// Este é o componente principal que será usado
export function Select({ children, value, onValueChange, ...props }) {
  
  // Extrai 'placeholder' do children se existir
  let placeholder = "";
  const options = React.Children.map(children, child => {
    if (child.type === SelectContent) {
      return React.Children.map(child.props.children, item => {
        if (item.type === SelectItem) {
          return item;
        }
      });
    } else if (child.type === SelectTrigger) {
      const valueChild = React.Children.toArray(child.props.children).find(
        c => c.type === SelectValue
      );
      if (valueChild) {
        placeholder = valueChild.props.placeholder;
      }
    }
    return null;
  }).flat().filter(Boolean);

  return (
    <select
      className="ui-input" // Reutiliza o estilo do input, como no Figma
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      {...props}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options}
    </select>
  );
}