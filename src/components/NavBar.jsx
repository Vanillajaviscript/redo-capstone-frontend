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
  MDBBtn,
  MDBInputGroup,
  MDBBreadcrumb,
  MDBBreadcrumbItem
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
   <MDBNavbar fixed="top" expand="lg" style={{backgroundColor: "RGB(168,127,80)"}}>
    <MDBContainer>
      <MDBNavbarBrand href="/" style={{color: "#0d0f12", fontWeight: "600", fontSize: "22px"}}>
      <img style={{width: "10rem"}} src="https://goldenbondrescue.com/wp-content/uploads/2021/11/golden-bond-rescue-logo-horizontal.webp" class="img-fluid" alt="My responsive image."></img>
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
            <h5 style={{ marginTop: "35px"}}>Welcome, {user?.result?.name}</h5>
          )}
          <MDBNavbarItem>
            <MDBNavbarLink href="/">
              <p className="navbar-text"><MDBIcon icon="home" className="fa-1x"></MDBIcon></p>
            </MDBNavbarLink>
          </MDBNavbarItem>
          
          {user?.result?._id && (
            <>
            <MDBNavbarItem>
            <MDBNavbarLink href="/adddog">
              <p className="navbar-text">Create</p>
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
              <p className="navbar-text" onClick={handleLogout}><MDBIcon icon="sign-out-alt" className="fa-1x"></MDBIcon></p>
            </MDBNavbarLink>
          </MDBNavbarItem> 
          ) : (
        <MDBNavbarItem>
          <MDBNavbarLink href="/login">
            <p className="navbar-text"><MDBIcon icon="sign-in-alt" className="fa-1x"></MDBIcon></p>
          </MDBNavbarLink>
        </MDBNavbarItem>
          )}
        </MDBNavbarNav>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-0' onSubmit={handleSubmit}>
        <input
            style={{marginLeft: "25px"}} 
            type="text" 
            className="form-control" 
            placeholder="Search Dog Name" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} />
          <MDBBtn><MDBIcon rippleColor='light' fas icon="search" /></MDBBtn>
        </MDBInputGroup>
      </MDBCollapse>
    </MDBContainer>
   </MDBNavbar>
  )
}
export default NavBar