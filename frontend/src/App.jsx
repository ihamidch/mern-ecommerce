import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/auth/Registerpage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
