import React from "react";
import { tabs } from "../Common/Configuration";

export const NavigationTabs = ({ id, setId }) => (
  
  <div>
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setId(tab.id)}
        className={`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${
          id === tab.id ? "text-blue" : ""
        }`}
      >
        <i className={`${tab.icon} text-2xl mr-4 text-left`}></i>
        <p className="text-lg font-semibold text-left hidden lg:block">
          {tab.title}
        </p>
      </button>
    ))}
  </div>
);



