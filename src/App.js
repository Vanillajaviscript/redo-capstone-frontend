import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from './components/NavBar';
import {useDispatch} from "react-redux";
import {useEffect} from "react"
import {setUser, setLogout} from "./redux/features/authSlice";
import AddEditDog from './pages/AddEditDog';

function App() {
  const dispatch = useDispatch();
  //allows user to be saved so that it is not lost upon refresh of page. 
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
  <Router>
    <div className="App">
      <NavBar />
      <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/login" element={<Login />}>Login</Route>
      <Route path="/register" element={<Register />}>Signup</Route>
      <Route path="/adddog" element={<AddEditDog />} />
      <Route path="/editdog/:id" element={<AddEditDog />} />
      
    </Routes>
    </div>
  </Router>
  );
}

export default App;
