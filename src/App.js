import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
  <Router>
    <div className="App">
      <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/login" element={<Login />}>Login</Route>
      <Route path="/register" element={<Register />}>Signup</Route>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
