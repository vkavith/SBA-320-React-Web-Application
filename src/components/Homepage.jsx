import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="welcome-title">Welcome to Meals Website</h1>
      <div className="button-container">
        <button onClick={() => navigate("/search")}>Meals Search</button>
        <button onClick={() => navigate("/area")}>Meals by Area</button>
      </div>
    </div>
  );
}

export default Homepage;
