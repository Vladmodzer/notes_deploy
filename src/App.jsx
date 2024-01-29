import { useState } from "react";
import "./App.css";
import Log_in_page from "./pages/logInPage/log_in_page.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_page from "./pages/homePage/home_page.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-box">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/login_page" element={<Log_in_page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
