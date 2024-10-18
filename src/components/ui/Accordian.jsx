/* eslint-disable react/prop-types */
// import { useState } from "react";
// import { FaChevronUp } from "react-icons/fa";

export const Accordion = ({
  className,
  items,
  children,
  stepNumber,
  isOpen,
  onToggle,
  activeState,
  ...props
}) => {
  // const [openIndex, setOpenIndex] = useState(null);
  // const handleToggle = (index) => {
  //   setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  // };
  // const items = {
  //   title: "Click me",
  //   content: "This is a accordian",
  // };
  // const { title, content } = items;

  return (
    <div
      className={` w-full  border rounded-sm w-96  rounded-lg transition ease-in-out delay-150 cursor-pointer ${
        className || ""
      }`}
      {...props}
    >
      {items.map((item, index) => (
        <div key={index}>
          {/* Accordion title and svg */}
          <div
            // className={`flex justify-between items-center border font-semibold py-2 px-6 ${
            //   openIndex === index ? "bg-gray-50" : "bg-white"
            // }`}
            // onClick={() => handleToggle(index)}
            className={`flex justify-between items-center border font-semibold py-2 px-6 ${
              isOpen ? "bg-gray-50" : "bg-white"
            }
              
            `}
            onClick={onToggle}
          >
            {/* Accordion Title  */}
            <div className="flex justify-center items-center text-sm text-black">
              <div>
                {/*
                 {openIndex === index ? (
                  <span className="px-2 py-[2px] mx-3 rounded-[4px] bg-black font-light text-white text-xs">
                    {stepNumber}
                  </span>
                ) : (
                  <span className="px-2 py-[2px] mx-3 rounded-[4px] bg-green-400 font-light text-white text-xs">
                    {stepNumber}
                  </span>
                )}
                 */}
                <span
                  className={`px-2 py-[2px] mx-3 rounded-[4px] font-semibold text-xs 
                    ${!isOpen && activeState > 1
                      ? "bg-green-500"
                      : !isOpen ? "bg-slate-200 text-black"
                      : "bg-black text-white"
                    }
                  `}
                >
                  {!isOpen && activeState > 1 ? <span className="text-white text-md">✓</span> : stepNumber}
                </span>
              </div>
              {item.title}
            </div>

            {/* Accordion logo */}
            <div className="cursor-pointer">
              <div
                className={`height-[40px] transition-all duration-200`}
              >
                {/* <FaChevronUp /> */}
                {
                  !isOpen && activeState > 1 ? <a href=""><span className="text-sm">change</span></a> : ""
                }
              </div>
            </div>
          </div>
          {/* Accordion Content */}
          {/* <div
            className={`transition-all ease-in duration-500 ${
              openIndex === index ? "h-full" :"h-0"
            } overflow-hidden`}
          >
            {openIndex === index && (
              <div >
                {item.content} {children}
              </div>
            )}
          </div> */}
          <div
            className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              isOpen ? "max-h-[2000px]" : "max-h-0"
            }`}
          >
            {item.content} {children}
          </div>
        </div>
      ))}
    </div>
  );
};
