import { useState } from "react";
import "./App.css";
import Log_in_page from "./pages/logInPage/log_in_page.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_page from "./pages/homePage/home_page.jsx";
import { AppProvider } from "./components/appContex.jsx";
import CreateNotes from "./pages/createNotes/createNotes.jsx";
import UserAccount from "./pages/userAccount/userAccount.jsx";
import ViewNote from "./pages/viewNote/viewNote.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>
      <div className="app-box">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home_page />} />
            <Route path="/login_page" element={<Log_in_page />} />
            <Route path="/create_notes" element={<CreateNotes />} />
            <Route path="/user_account" element={<UserAccount />} />
            <Route path="/view_note" element={<ViewNote />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
