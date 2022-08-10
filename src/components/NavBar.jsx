import { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBadge,
  MDBBtn,
  MDBNavbarBrand,
  MDBNavbarLink
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";



const NavBar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout())
  };
  //allows conditional for visible logout if user is logged in
  const {user} = useSelector((state) => ({...state.auth}));
  return (
   <MDBNavbar fixed="top" expand="lg" style={{backgroundColor: "#6e80a4"}}>
    <MDBContainer>
      <MDBNavbarBrand href="/" style={{color: "#0d0f12", fontWeight: "600", fontSize: "22px"}}>
        Farm Sanctuary
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
            <h5 style={{marginRight: "60px", marginTop: "20px"}}>Welcome, {user?.result?.name}</h5>
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
      </MDBCollapse>
    </MDBContainer>
   </MDBNavbar>
  )
}
export default NavBar