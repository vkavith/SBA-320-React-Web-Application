import { useState } from "react";

// Component for searching meals using TheMealDB API
function SearchMeals() {
  // State to store search results
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fetch meals from API based on search Meals keyword
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    setMeals(data.meals); // Update meals state with search results
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search meals"
          className="search-input"
        />
        <button type="submit"> Search Meals </button>
      </form>
      
      <div className="meal-grid">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <h2>{meal.strMeal}</h2>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              
            />
            <div className="meal-info">
              <p>Category: {meal.strCategory}</p>
              <p>Area: {meal.strArea}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchMeals;
