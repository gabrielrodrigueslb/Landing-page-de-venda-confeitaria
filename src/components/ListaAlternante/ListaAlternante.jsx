/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ListaAlternante.scss";

export default function ListaAlternante({ pergunta, resposta }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          tabIndex={0}
        >
          <span className="accordion-title">{pergunta}</span>
          <svg
            className={`accordion-icon ${isOpen ? "open" : ""}`}
            viewBox="0 0 16 16"
            fill="none"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.293 5.293a1 1 0 0 1 1.414 0L8 7.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
              fill="currentColor"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="content">
            <p>{resposta}</p>
          </div>
        )}
      </div>
    </div>
  );
}
