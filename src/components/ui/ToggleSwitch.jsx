/* eslint-disable react/prop-types */
import { useState } from "react";

function ToggleSwitch(props) {
  const [toggle, setToggle] = useState(false);
  
  function handleToggle() {
    setToggle((prev) => !prev);
  }
  
  const { name, toggleId, variant="default", size="default", labelText } = props;

  const toggleBackgroundColor = {
    default: "h-6 w-11 bg-gray-300 rounded-full transition-all duration-200 shadow-inner"
  }
  
  return (
    <div className="relative inline-flex justify-center items-center">
      <input
        type="checkbox"
        name={name}
        id={toggleId}
        checked={toggle}
        onChange={handleToggle}
        className="hidden"
      />
      
      <label htmlFor={toggleId} className="cursor-pointer">
        <div
          className={`h-6 w-11 bg-gray-300 rounded-full transition-all duration-200 shadow-inner ${
            toggle ? "bg-green-500" : ""
          }`}
        >
          <div
            className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all duration-200 shadow-inner ${
              toggle ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </div>
        <span>{labelText}</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;