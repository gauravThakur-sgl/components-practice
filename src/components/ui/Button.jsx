/* eslint-disable react/prop-types */
function Button(props) {
  const { title, type, variant = "default", size = "default" } = props;
  const buttonColors = {
    default: "bg-btn-primary hover:bg-btn-primary-hover text-white border text-white font-bold shadow",
    destructive: "bg-red-primary text-white font-bold hover:bg-red-background",
    outline: "border bg-white text-black hover:text-black-100 font-bold",
    ghost: 'bg-grey-400',
    link: 'bg-btn-primary hover:bg-btn-primary-hover text-white border text-white font-bold hover:underline',
    disabled: 'bg-grey-400 text-black border border-gray p-3 block hover:hidden',
    dark: 'bg-black text-white font-bold hover:bg-black-500'
  };
  const buttonSize =  {
    default: "h-9 px-4 py-2",
    xs: "h-6 px-3 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-10 rounded-md px-8",
    xl: "h-11 rounded-md w-full max-w-sm",
    icon: "h-10 w-10",
  };
  const baseClasses = "inline-flex items-center p-1 rounded-md text-md"
  const sizeClasses = buttonSize[size] || buttonSize.default;
  const variantClasses = buttonColors[variant] || buttonColors.default;


  return <div>
    <button className={`${variantClasses} ${baseClasses} ${sizeClasses}`} type={type}>{title}</button>
  </div>;
}
export default Button;
