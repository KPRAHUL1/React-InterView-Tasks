import React, { useState } from "react";

function ReadMoreToggle() {
    const [isExpanded, setIsExpanded] = useState(false);

  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;


  return (
    <div className="w-50">
      <h1 className="title">Read More Toggle</h1>
      <p className={`${isExpanded ? '':'line-clamp-3'}`} >
        {text}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="readmore-button"
        data-testid="readmore-button"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMoreToggle;
