/* eslint-disable react/prop-types */
import { useState } from "react";

function DropDownList(props) {
  const { className, variant="default", size ="default",} = props;
  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    {
      value: "home",
      label: "Home",
    },
    { value: "contact", label: "Contact" },
    { value: "Help", label: "Help" },
  ];
  const listColors = {
    default: "bg-gray-300",
    error: "bg-red-400"
  }
  const listSize = {
    default: "p-1, shadow-sm rounded-sm"
  }
  const baseClasses = "p-2 px-4 rounded-md inline-flex shadow-lg focus:border-blue-500"
  const variantClasses = listColors[variant] || listColors.default
  const listSizeClasses = listSize[size] || listSize.default
  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className={`${baseClasses} ${variantClasses} ${listSizeClasses} ${className} || '' `}
        name=""
        id=""
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownList;
