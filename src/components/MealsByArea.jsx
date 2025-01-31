import { useState, useEffect } from "react";

// Component to display meals by Country Specific
function MealsByArea() {
  // State to store list of areas and meals
  const [areas, setAreas] = useState([]);
  const [meals, setMeals] = useState([]);

  // useEffect hook to fetch areas
  useEffect(() => {
    console.log("MealsByArea mounted");
    async function fetchAreas() {
      // Fetch areas from TheMealDB API
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      const data = await response.json();
      // Update areas state with fetched meal areas
      setAreas(data.meals);
    }
    fetchAreas();
  }, []);

  //Async function to fetch meals for a selected area
  async function handleAreaSelect(area) {
    // Fetch meals for the selected area
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const data = await response.json();
    // Update meals state with fetched meals
    setMeals(data.meals);
  }

  return (
    <div className="area-container">
      <select
        onChange={(e) => handleAreaSelect(e.target.value)}
        className="area-select"
      >
        <option value=""> Select an Area</option>
        {areas.map((area) => (
          <option key={area.strArea} value={area.strArea}>
            {area.strArea}
          </option>
        ))}
      </select>

      {/* Grid to display meals */}
      <div className="meals-grid">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3> {meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealsByArea;
