import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
