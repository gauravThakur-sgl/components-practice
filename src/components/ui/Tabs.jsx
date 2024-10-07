import { useState } from "react";

export const Tabs = ({ tabs, className, ...props }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div className={`${className || ''}`} {...props}>
        <div className="flex border-b">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 ${activeTab === index ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="py-4">{tabs[activeTab].content}</div>
      </div>
    );
  };