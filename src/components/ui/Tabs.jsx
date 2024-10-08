/* eslint-disable react/prop-types */
import { useState } from "react";

const tabs = [
  {
    label:'Tab1',
    message: 'loremIpsum 1'
  },
  {
    label: 'Tab2',
    message: 'loremIpsum 2'
  },
  {
    label: 'Tab3',
    message: 'loremIpsum 3'
  }
]
export function Tabs ({ className, ...props }) {
  
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`${className || ""}`} {...props}>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 ${
              activeTab === index ? "border-b-2 border-blue-500" : "border-transparent hover:border-gray-200"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="px-4">{tabs[activeTab].message}</div>
    </div>
  );
};
