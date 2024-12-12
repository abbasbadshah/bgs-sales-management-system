import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export const Input = ({
  type = "text",
  name,
  label,
  placeholder = "",
  className = "",
  required = false,
  error,
  options = [],
  multiple = false,
  rows = 4,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseClasses =
    "w-full p-2 h-16 bg-primary text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition duration-300 ease-in-out";

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            name={name}
            multiple={multiple}
            required={required}
            className={`${baseClasses} ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-white text-black"
              >
                {option.label}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            name={name}
            placeholder={placeholder}
            className={`${baseClasses} h-auto resize-y ${className}`}
            rows={rows}
            required={required}
            {...props}
          />
        );

      case "checkbox":
        return (
          <input
            name={name}
            type="checkbox"
            className="h-5 w-5 text-primary bg-white/20 rounded border-white/30 focus:ring-white/50"
            required={required}
            {...props}
          />
        );

      case "radio":
        return options.map((option) => (
          <label
            key={option.value}
            className="inline-flex items-center mr-4 text-black"
          >
            <input
              name={name}
              type="radio"
              value={option.value}
              className="form-radio text-primary bg-white/20 border-white/30 focus:ring-white/50"
              required={required}
              {...props}
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ));

      case "file":
        return (
          <input
            name={name}
            type="file"
            multiple={multiple}
            required={required}
            className={`${baseClasses} file:mr-4 file:rounded-full file:border-0 file:bg-white file:text-primary file:px-4 file:py-2 ${className}`}
            {...props}
          />
        );

      case "password":
        return (
          <div className="relative w-full">
            <input
              name={name}
              type={showPassword ? "text" : "password"}
              placeholder={placeholder}
              className={`${baseClasses} pr-10 ${className}`}
              required={required}
              {...props}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition duration-300"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        );

      default:
        return (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={`${baseClasses} ${className}`}
            required={required}
            {...props}
          />
        );
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium mb-2 ${
            required ? "after:content-['*'] after:ml-1 after:text-red-500" : ""
          } text-black`}
        >
          {label}
        </label>
      )}
      {renderInput()}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
