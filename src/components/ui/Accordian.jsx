/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Accordion = ({ className,items,children, ...props }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };  // const items = {
  //   title: "Click me",
  //   content: "This is a accordian",
  // };
  // const { title, content } = items;

  return (
    <div className={`font-sans w-full border rounded-sm w-96  shadow-lg  rounded-lg transition ease-in-out delay-150 cursor-pointer ${className || ""}`} {...props}>
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center border shadow-sm font-bold py-2 px-6 bg-gray-50" onClick={() => handleToggle(index)}>
            <div>{item.title}</div>
            <div className="cursor-pointer">{openIndex === index ? <div className="height-[40px]" ><FaChevronUp /></div> : <div><FaChevronDown /></div>}</div>
          </div>
          {openIndex === index && <div className="text-md">{item.content} {children}</div>}
        </div>
      ))}
    </div>
  );
};