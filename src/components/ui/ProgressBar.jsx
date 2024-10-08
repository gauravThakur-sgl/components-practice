/* eslint-disable react/prop-types */
export function Progress({ value, max = 100, variant = 'default', className, ...props }){
    const progressColor = {
        default : "bg-green-600",
        destructive: "bg-red-500"
    }
    const colorClass  = progressColor[variant] || progressColor.default
    const baseClass = "bg-green-600 h-2.5 rounded-full cursor-pointer"
    return (
      <div className={`w-[300px] bg-gray-200 rounded-full h-2.5 ${className || ''}`} {...props}>
        <div
          className={`${baseClass} ${colorClass} ${className || ""}`}
          style={{ width: `${(value / max) * 100}%` }}
        ></div>
      </div>
    );
  };