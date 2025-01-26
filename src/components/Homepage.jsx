import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="button-container">
      <button onClick={() => navigate("/search")}>Meals Search</button>
    </div>
  );
}

export default Homepage;
