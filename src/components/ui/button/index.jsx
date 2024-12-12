export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  minWidth = "120px",
  minHeight = "48px",
  ...props
}) => {
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary/10",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
          px-4 py-2 
          rounded-lg 
          transition duration-300 ease-in-out 
          focus:outline-none focus:ring-2 focus:ring-white/50
          ${variantClasses[variant] || variantClasses.primary}
          ${className}
        `}
      style={{
        minWidth,
        minHeight,
      }}
      {...props}
    >
      {children}
    </button>
  );
};
