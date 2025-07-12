import React from "react";
import recipesData from "./receipee";

const RecipeFilterApp = () => {

  return (
    <>
      <h1 className="text-center">🍽️ Recipe Explorer</h1>
     <div className="flex justify-evenly"><div><span>Filter By Rating:</span><select name="rating" id="rating">
        <option value="4">4.0+</option>
        <option value="3">4.3+</option>
        <option value="2">4.6+</option>
        <option value="1">4.9+</option>
      </select></div>
      <div>
        <span>Cart Items: 0</span>
      </div>
      
        </div> <div className="flex flex-wrap justify-center">
        {recipesData.map((receip)=>(
            <>
            <div key={receip.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md m-2">
                <img src={receip.image} alt={receip.name} className="w-full h-32 object-cover rounded-md mb-2"/>
                <h2>{receip.name}</h2>
                 <p>Cuisine: {receip.cuisine}</p>
                 <p>Rating: {receip.rating}</p>
                 <button className="bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
            </>
        ))}
      </div>
    </>
  );
};

export default RecipeFilterApp;
