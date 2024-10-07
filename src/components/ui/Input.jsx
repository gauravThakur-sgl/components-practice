/* eslint-disable react/prop-types */
function Input(props) {
    const {type, placeholder, id, variant="default", size="default", labelData} = props
    const inputColors = {
        default: "bg-black-300",
        error: "bg-red-100 border-0 ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-red-400"
    }
    const inputSize =  {
        default: "h-10 text-base",
        sm: "h-16 text-sm",
        lg: "h-16 text-lg"
    };
    const baseClasses = "inline-flex p-1 px-3 rounded-md text-md border-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none"
    const variantClasses = inputColors[variant] || inputColors.default
    const sizeClasses = inputSize[size] || inputSize.default
  return (
    <div className="flex justify-center items-center gap-2">
        <input type={type} placeholder={placeholder} id={id} className={`${baseClasses} ${variantClasses} ${sizeClasses}`} />
        <label htmlFor={id}>{labelData}</label>
    </div>
  )
}

export default Input