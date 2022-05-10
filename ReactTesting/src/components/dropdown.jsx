import React, { useState } from "react";

export const Dropdown = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(true)}>{title}</button>
      {/* <button onClick={() => setIsOpen((o) => !o)}>{title}</button> (para abrir e também fechar em cada clique) */}

      {isOpen && (
        <ul role="menu">
          {options.map((option) => (
            <li key={option} role="menuItem" onClick={() => handleSelection(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
