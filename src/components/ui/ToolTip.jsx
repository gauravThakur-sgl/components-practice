import { useState } from "react";
/* eslint-disable react/prop-types */
function ToolTip(props) {
    const {  children, message, position = "top", className } = props
    const[isVisible, setIsVisible] = useState(false);
    const tooltipPositions = {
      top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2 transition-all",
      bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
      left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
      right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    }
    const baseClasses = "absolute z-10 px-2 py-1 text-sm text-white bg-gray-400 rounded shadow-lg"
    const positionClasses = tooltipPositions[position] || tooltipPositions.top;
  return (
    <div className='relative inline-block'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (<div className={`${baseClasses} ${positionClasses} ${className || ''}`} {...props}>
        {message}
      </div>)}
    </div>
  )
}

export default ToolTip