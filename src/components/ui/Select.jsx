/* eslint-disable react/prop-types */

function Select(props) {
  const options = ["America", "India", "Russia", "Japan"]
  const { title, id, variant="default",size="default", className } = props;
  const selectColors = {
    default: "border-gray-300 focus:border-blue-500",
    error: "border-red-500 focus:border-red-600",
  }
  const selectSize = {
    default: "h-10 text-base",
    sm: "h-8 text-sm",
    lg: "h-12 text-lg",
  }
  const baseClasses = "border rounded-md text-md"
  const variantClasses = selectColors[variant] || selectSize.default
  const sizeClasses = selectSize[size] || selectSize.default
  return (
    <div >
      <select name={title} id={id} className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className || ""}`}>
        {options.map((option) => {
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        })}
      </select>
    </div>
  );
}

export default Select;
