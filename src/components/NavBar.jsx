import { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBBtn
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { searchDogs } from "../redux/features/dogSlice";


const NavBar = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(search) {
      dispatch(searchDogs(search));
      navigate(`/dogs/search?searchQuery=${search}`);
      setSearch("");
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    dispatch(setLogout())
  };
  //allows conditional for visible logout if user is logged in
  const {user} = useSelector((state) => ({...state.auth}));
  return (
   <MDBNavbar fixed="top" expand="lg" style={{backgroundColor: "#6e80a4"}}>
    <MDBContainer>
      <MDBNavbarBrand href="/" style={{color: "#0d0f12", fontWeight: "600", fontSize: "22px"}}>
        GoldenBond Rescue
        <MDBIcon icon="dog" className="fa-2x" style={{paddingLeft: "20px"}} />
        <MDBIcon icon="bone" />
      </MDBNavbarBrand>
      <MDBNavbarToggler
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setShow(!show)}
      >
      <MDBIcon icon="bars" fas />
      </MDBNavbarToggler>
      <MDBCollapse show={show} navbar>
        <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
          {user?.result?._id && (
            <h5 style={{ marginTop: "30px"}}>Welcome, {user?.result?.name}</h5>
          )}
          <MDBNavbarItem>
            <MDBNavbarLink href="/">
              <p className="navbar-text">Home</p>
            </MDBNavbarLink>
          </MDBNavbarItem>
          {user?.result?._id && (
            <>
            <MDBNavbarItem>
            <MDBNavbarLink href="/adddog">
              <p className="navbar-text">Add Dog</p>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/dashboard">
              <p className="navbar-text">Dashboard</p>
            </MDBNavbarLink>
          </MDBNavbarItem>
            </>
          )}
          {user?.result?._id ? (
          <MDBNavbarItem>
            <MDBNavbarLink href="/login">
              <p className="navbar-text" onClick={handleLogout}>Logout</p>
            </MDBNavbarLink>
          </MDBNavbarItem> 
          ) : (
        <MDBNavbarItem>
          <MDBNavbarLink href="/login">
            <p className="navbar-text">Login</p>
          </MDBNavbarLink>
        </MDBNavbarItem>
          )}
        </MDBNavbarNav>
      
        <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search Dog Name" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} />
          <div style={{marginTop: "1px", marginLeft: "5px"}}>
            <MDBBtn>
              <MDBIcon fas icon="search" />
            </MDBBtn>
          </div>
        </form>
      </MDBCollapse>
    </MDBContainer>
   </MDBNavbar>
  )
}
export default NavBar