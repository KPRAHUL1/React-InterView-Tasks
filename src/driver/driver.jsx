import React from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const DriverDemo = () => {
  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: ".page-header",
          popover: { title: "Header", description: "This is the header." },
        },
        {
          element: ".top-nav",
          popover: { title: "Navigation", description: "Use these links." },
        },
        {
          element: ".sidebar",
          popover: { title: "Sidebar", description: "Secondary actions here." },
        },
        {
          element: ".footer",
          popover: { title: "Footer", description: "Footer content." },
        },
      ],
    });

    driverObj.drive();
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="page-header font-bold text-xl mb-3 bg-blue-100 p-4 rounded-lg">
        Demo Header
      </div>

      <div className="top-nav flex gap-3 mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Home
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          Deposit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
          Withdraw
        </button>
      </div>

      <div className="flex gap-4">
        <div className="sidebar w-48 border border-gray-300 p-4 rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Sidebar</h3>
          <p className="text-sm text-gray-600">Navigation items and secondary actions go here.</p>
        </div>

        <div className="flex-1 border border-gray-300 p-4 rounded-lg bg-white">
          <h3 className="font-semibold mb-2">Main Content</h3>
          <p className="mb-4 text-gray-700">
            This is the main content area. Click the button below to start a guided tour that will highlight different sections of this page.
          </p>
          <button 
            onClick={startTour}
            className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors font-medium"
          >
            Start Tour
          </button>
        </div>
      </div>

      <div className="footer mt-4 border-t border-gray-200 pt-4 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-1">Demo Footer</h3>
        <p className="text-sm text-gray-600">Footer content and additional links would go here.</p>
      </div>
    </div>
  );
};

