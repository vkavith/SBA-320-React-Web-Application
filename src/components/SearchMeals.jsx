import { useState } from "react";

function SearchMeals() {
  const [meal, setMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    setMeal(data.meals?.[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search meals"
          className ="search-input"
        />
        <button type="submit" className="search-button"> Search Meals </button>
      </form>

      {meal && (
        <div className="meal-card">
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>Category: {meal.strCategory}</p>
          <p>Area: {meal.strArea}</p>
        </div>
      )}
    </div>
  );
}

export default SearchMeals;
