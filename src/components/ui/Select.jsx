/* eslint-disable react/prop-types */
function Select(props) {
  const {
    title,
    id,
    variant = "default",
    size = "default",
    className,
    options,
    onChange,
  } = props;

  const selectColors = {
    default: "border-gray-300 focus:border-blue-500",
    error: "border-red-500 focus:border-red-600",
  };

  const selectSize = {
    default: "h-10 text-base w-full",
    sm: "h-8 text-sm",
    lg: "h-12 text-lg",
  };

  const baseClasses = "bg-white border rounded-md text-md";
  const variantClasses = selectColors[variant] || selectColors.default;
  const sizeClasses = selectSize[size] || selectSize.default;

  return (
    <div>
      <select
        name={title}
        id={id}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className || ""}`}
        onChange={onChange}
      >
        <option value="">Select {title}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;