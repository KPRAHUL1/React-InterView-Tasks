import React, { useState } from "react";
import recipesData from "./receipee";

const RecipeFilterApp = () => {
  const [count, setCount] = useState(0);
  const [selectedRating, setSelectedRating] = useState("0"); // default show all

  const handleAddToCart = () => {
    setCount((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const filteredRecipes = recipesData.filter(
    (recipe) => parseFloat(recipe.rating) >= parseFloat(selectedRating)
  );
  

  const averageRating = filteredRecipes.length
    ? (
        filteredRecipes.reduce(
          (acc, curr) => acc + parseFloat(curr.rating),
          0
        ) / filteredRecipes.length
      ).toFixed(1)
    : "0.0";
    console.log(filteredRecipes);
    

  return (
    <>
      <h1 className="text-center text-xl font-medium my-4">🍽️ Recipe Explorer</h1>

      {/* Filter + Cart */}
      <div className="flex justify-evenly items-center mb-6">
        {/* Rating Filter */}
        <div>
          <label htmlFor="rating" className="font-medium mr-2">
            Filter By Rating:
          </label>
          <select
            name="rating"
            id="rating"
            className="border rounded px-2 py-1"
            value={selectedRating}
            onChange={handleChange}
          >
            <option value="4">4.0+</option>
            <option value="4.3">4.3+</option>
            <option value="4.5">4.5+</option>
            <option value="4.6">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>
        </div>

        {/* Cart Count */}
        <div>
          <span className="font-medium">Cart Items: {count}</span>
        </div>
      </div>

      {/* Average Rating */}
      <div className="flex justify-center my-4">
        <h2 className="text-lg font-semibold">
          Average Rating: {averageRating} ({filteredRecipes.length}{" "}
          {filteredRecipes.length === 1 ? "recipe" : "recipes"})
        </h2>
      </div>

      {/* Recipe Grid */}
      <div className="flex flex-wrap justify-center">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md m-2 w-[220px]"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h2 className="font-semibold text-center">{recipe.name}</h2>
              <p className="text-sm text-gray-600">Cuisine: {recipe.cuisine}</p>
              <p className="text-sm text-gray-600">Rating: {recipe.rating} {(recipe.reviewCount > 0 ? `(${recipe.reviewCount} reviews)` : "(No reviews)")}</p>
              <button
                aria-label="Add to Cart"
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">
            No recipes found for this rating 🥲
          </p>
        )}
      </div>
    </>
  );
};

export default RecipeFilterApp;
