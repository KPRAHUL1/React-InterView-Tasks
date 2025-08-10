import React, { useState } from "react";

function ReadMore() {
 const [isExpand , setExpand]= useState(false)
  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;


  return (
    <div className="w-50">
      <h1 className=" ">Read More Toggle</h1>
      <p className=" " data-testid="readmore-text">
        {isExpand ? text:text.slice(0, 100) + '...'}
      </p>
      <button
        className=" px-3 py-2 "
        data-testid="readmore-button"
        onClick={() => setExpand(!isExpand)}
      >
        {isExpand ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMore ;
