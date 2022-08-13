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
import {setUser} from "./redux/features/authSlice";
import AddEditDog from './pages/AddEditDog';
import SingleDog from './pages/SingleDog';
import Dashboard from './pages/Dashboard';
import AuthorizedRoute from './components/AuthorizedRoute';
import Page404 from './components/Page404';
import Footer  from './components/Footer';
import Carousel from './components/Carousel';
import Accordion from "./components/Accordion";

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
      <Accordion />
      <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dogs/search" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/adddog" element={
        <AuthorizedRoute>
          <AddEditDog />
        </AuthorizedRoute>
        } 
      />
      <Route path="/editdog/:id" element={
        <AuthorizedRoute>
          <AddEditDog />
        </AuthorizedRoute>
        } 
      />
      <Route path="/dog/:id" element={<SingleDog />} />
      <Route path="/dashboard" element={
        <AuthorizedRoute>
          <Dashboard />
        </AuthorizedRoute>} />
      <Route path="*" element={<Page404 />}/>
    </Routes>
    <Carousel />
    <Footer />
    </div>
  </Router>
  );
}

export default App;
