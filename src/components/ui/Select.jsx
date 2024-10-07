/* eslint-disable react/prop-types */

function Select(props) {
  
  const { title, optionValue, variant="default",size="default" } = props;
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
      <select name="" id="" className={`${baseClasses} ${variantClasses} ${sizeClasses}`}>
        <option value={optionValue}>{title}</option>
      </select>
    </div>
  );
}

export default Select;
