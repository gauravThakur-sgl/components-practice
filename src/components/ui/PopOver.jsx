/* eslint-disable react/prop-types */
import { useState } from "react";

function PopOver({ trigger, content, className, ...props}) {
    const [isOpen, seIsOpen] = useState(false);
  return (
    <div>
        <button onClick={() => seIsOpen(!isOpen)}>{trigger}</button>
        {isOpen && (
            <div className={`absolute z-8 mt-2 p-4 bg-white border rounded-lg shadow-lg ${className || ''}`} {...props}>{content}</div>
        )}
    </div>
  )
}
export default PopOver
