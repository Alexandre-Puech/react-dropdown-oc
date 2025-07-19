import { useState, useRef, useEffect } from "react";
import "../styles/dropdown.css";

export default function Dropdown({
  label,
  name,
  value,
  options = [],
  onChange,
  className = "",
  disabled = false,
  required = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const id = name ?? label.toLowerCase().replace(/\s+/g, "-");

  const handleSelect = (val) => {
    onChange?.(val);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => (opt.value ?? opt.abbreviation ?? opt) === value)
      ?.label ??
    options.find((opt) => (opt.value ?? opt.abbreviation ?? opt) === value)
      ?.name ??
    value;

  return (
    <div className={`dropdown-container ${className}`} ref={dropdownRef}>
      {label && (
        <label htmlFor={id} className="dropdown-label">
          {label}
        </label>
      )}
      <div
        className={`dropdown-selected ${disabled ? "disabled" : ""}`}
        onClick={() => {
          if (!disabled) setIsOpen(!isOpen);
        }}
      >
        {selectedLabel || ""}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => {
            const optionValue = option.value ?? option.abbreviation ?? option;
            const label = option.label ?? option.name ?? option;
            return (
              <li
                key={index}
                className="dropdown-option"
                onClick={() => handleSelect(optionValue)}
              >
                {label}
              </li>
            );
          })}
        </ul>
      )}
      {required && !value && (
        <input type="hidden" name={name} value="" required />
      )}
    </div>
  );
}
