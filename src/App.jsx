import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import SearchMeals from "./components/SearchMeals";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchMeals />} />
        <Route path="/area" element={<MealsByArea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
