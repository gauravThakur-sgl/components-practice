/* eslint-disable react/prop-types */
export default function Badge({
  badgeTitle,
  variant = "default",
  size = "default",
}) {
  const badgeColors = {
    default:
      "border border-green-300 p-1 rounded-md bg-green-200 text-green-700",
    destructive: "border ring ring-red-300 bg-red-200 text-red-primary",
    ghost: "hover:bg-black hover:text-white",
  };
  const badgeSize = {
    default: "h-9 px-4 py-2",
    xs: "h-6 px-2 py-1",
    sm: "h-9 rounded-md px-3",
    lg: "h-10 rounded-md px-8",
    xl: "h-11 rounded-md w-full max-w-sm",
    icon: "h-10 w-10",
  };
  const sizeClasses = badgeSize[size] || badgeSize.default;
  const baseClasses = "inline-flex items-center p-1 rounded-md text-md";
  const variantClasses = badgeColors[variant] || badgeColors.default;
  return (
    <div className="p-2 flex justify-center items-center ">
      <span className={`${variantClasses} ${baseClasses} ${sizeClasses}`}>
        {badgeTitle}
      </span>
    </div>
  );
}
