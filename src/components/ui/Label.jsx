/* eslint-disable react/prop-types */

function Label(props) {
    const { children, title, variant="default", size="default" } = props
    const labelColors = {
        default: " text-black",
        error: "bg-red-300 text-red-900"
    }
    const labelSize =  {
        default: "p-2",
        sm: "p-1",
        md: "p-3",
        lg: "p-5"
    }
    const baseClass = " rounded-md "
    const variantClasses = labelColors[variant] || labelColors.default
    const sizeClasses = labelSize[size] || labelSize.default
  return (
    <div><label htmlFor={title} className={`${baseClass} ${variantClasses} ${sizeClasses}`} >{children}</label></div>
  )
}
export default Label