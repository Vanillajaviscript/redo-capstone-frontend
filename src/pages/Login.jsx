import React, {useState, useEffect, useRef} from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import {toast} from "react-toastify";
import { login, googleSignIn } from "../redux/features/authSlice";
// import {GoogleLogin} from "react-google-login";
///////////////////New Google Attempt//////////
import { useScript } from "../hooks/useScript";
import jwt_decode from "jwt-decode";
///////////////////////////////////////////////
const clientId = "19320938948-66q2rnf10gl3ofl68qd3aafs6ltfei2g.apps.googleusercontent.com";
const initialState = {
  email: "",
  password: "",
}
const Login = () => {
  ///////////////////New Google Attempt//////////
  const googleButtonRef = useRef();
  const [user, setUser] = useState(false)
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_decode(userCred);
    setUser(payload);
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: onGoogleSignIn,
      auto_select: false,
    });
  });

  const googleLogin = () => {
   
    return (
      <div>
      {!user && <div ref={googleButtonRef}></div>}
      {user && (
        <div>
          <h1>{user.name}</h1>
          <img src={user.picture} alt="profile" />
          <p>{user.email}</p>
        </div>
      )}
    </div>
    )
  }
  ///////////////////New Google Attempt//////////
  //state variables and functions
  const [formValue, setFormValue] = useState(initialState);
  const {loading, error} = useSelector((state) => ({...state.auth}));
  const {email, password} = formValue;
  //hooks initialized to variables
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //side effect to handle error for login
  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  //form functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password) {
      //brings in info where email and password are stored
      dispatch(login({formValue, navigate, toast }));
    }
  }
  const onChange = (e) => {
    let {name, value} = e.target;
    setFormValue({...formValue, [name]: value})
  }
  
  // const googleSuccess = (resp) => {
  //   const email = resp?.profileObj?.email;
  //   const name = resp?.profileObj?.name;
  //   const token = resp?.tokenId;
  //   const googleId = resp?.googleId;
  //   const result = { email, name, token, googleId };
  //   dispatch(googleSignIn({ result, navigate, toast }));
  // };
  // const googleFailure = (error) => {
  //   console.log("googleFailure", error)
  //   toast.error(error);
  // };
  
  return (
    <div style={{
      margin: "auto", 
      padding: "15px", 
      maxWidth: "450px", 
      alignContent: "center", 
      marginTop: "120px"
      }}
    >
        <MDBCard alignment="center" style={{paddingTop: "10px"}}>
          <MDBIcon fas icon="paw" className="fa-4x" />
          <h5>Sign In</h5>
          <MDBCardBody>
            <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
              <div className="col-md-12">
                <MDBInput
                  label="Email"
                  type="email"
                  value={email}
                  name="email"
                  onChange={onChange}
                  required
                  Invalid
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  label="Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={onChange}
                  required
                  Invalid
                />
              </div>
              <div className="col-12">
                <MDBBtn style={{width: "100%"}} className="mt-2">
                  {loading && (
                    <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                  )}
                  Login
                </MDBBtn>
              </div>
            </MDBValidation>
            <br />
            {/* ///////////////////New Google Attempt////////// */}
            <MDBBtn
              style={{ width: "100%" }}
              color="danger"
              googleSignIn={googleLogin}
            >
                 Google Sign In
            </MDBBtn>
            {/* ///////////////////New Google Attempt////////// */}
          {/* <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <MDBBtn
                style={{ width: "100%" }}
                color="danger"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <MDBIcon 
                  className="me-2" 
                  fab icon="google" 
                /> 
                  Google Sign In
                </MDBBtn>
              )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
            isSignedIn={true}
          /> */}
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/register">
            <span>Register here if you don't have an account.</span>
            </Link>
          </MDBCardFooter>
        </MDBCard>
      
    </div>
  )
}
export default Login