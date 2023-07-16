import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
          <Route path="/tasks" element={<h1>Tasks</h1>}></Route>
          <Route path="/add-task" element={<h1>Add task</h1>}></Route>
          <Route path="/tasks/:id" element={<h1>Update task</h1>}></Route>
          <Route path="/profile" element={<h1>Delete task</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
