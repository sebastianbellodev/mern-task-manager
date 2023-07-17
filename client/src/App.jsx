import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/signup" element={<SignupPage></SignupPage>}></Route>

            <Route element={<ProtectedRoute></ProtectedRoute>}>
              <Route path="/tasks" element={<TaskPage></TaskPage>}></Route>
              <Route
                path="/tasks/new"
                element={<TaskFormPage></TaskFormPage>}
              ></Route>
              <Route
                path="/tasks/:id"
                element={<TaskFormPage></TaskFormPage>}
              ></Route>
              <Route
                path="/profile"
                element={<ProfilePage></ProfilePage>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
