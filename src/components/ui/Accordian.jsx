/* eslint-disable react/prop-types */
import { useState } from "react";

export const Accordion = ({ className,items, ...props }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };  // const items = {
  //   title: "Click me",
  //   content: "This is a accordian",
  // };
  // const { title, content } = items;

  return (
    <div className={`w-full border rounded-xl w-96 bg-gray-300 shadow-lg py-2 px-6 rounded-lg transition ease-in-out delay-150 cursor-pointer ${className || ""}`} {...props}>
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center font-bold" onClick={() => handleToggle(index)}>
            <div>{item.title}</div>
            <div className="cursor-pointer">{openIndex === index ? '-' : '+'}</div>
          </div>
          {openIndex === index && <div className="text-md">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};