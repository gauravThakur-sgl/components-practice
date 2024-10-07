function Input(props) {
    const {type, placeholder, id, variant="default", size="default"} = props
    const inputColors = {
        default: "bg-black-300",
        error: "bg-red-100 foc"
    }
    const inputSize =  {
        default: "h-10 text-base",
        sm: "h-16 text-sm",
        lg: "h-32 text-lg"
    };
    const baseClasses = "inline-flex p-1 rounded-md text-md"
    const variantClasses = inputColors[variant] || inputColors.default
    const sizeClasses = inputSize[size] || inputSize.default
  return (
    <div>
        <input type={type} placeholder={placeholder} id={id} className={`${baseClasses} ${variantClasses} ${sizeClasses}`} />
    </div>
  )
}

export default Input