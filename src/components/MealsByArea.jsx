import { useState, useEffect } from "react";

function MealsByArea() {
  const [areas, setAreas] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    console.log("MealsByArea mounted");
    async function fetchAreas() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
      );
      const data = await response.json();
      setAreas(data.meals);
    }
    fetchAreas();
  }, []);

  async function handleAreaSelect(area) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const data = await response.json();
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
