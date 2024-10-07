/* eslint-disable react/prop-types */
import { useState } from "react";

export const Accordion = ({ className, ...props }) => {
  const [openIndex, setOpenIndex] = useState(false);
  const items = {
    title: "Click me",
    content: "This is a accordian",
  };
  const { title, content } = items;

  return (
    <div className={`border rounded-xl w-96 bg-gray-300 shadow-lg py-2 px-6 rounded ${className || ""}`} {...props}>
      <div>
        <div className="flex justify-between items-center font-bold transition ease-in-out delay-150"
            onClick={() => setOpenIndex(!openIndex)}
        >
          <div>{title}</div>
          <div className="cursor-pointer">{openIndex ? '-' : '+'}</div>
        </div>
        {openIndex && <div className="text-md">{content}</div>}
      </div>
    </div>
  );
};
