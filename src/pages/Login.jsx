import React, {useState, useEffect} from "react";
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
import {GoogleLogin} from "react-google-login";

const initialState = {
  email: "",
  password: "",
}
const Login = () => {
  //state variables and functions
  const [formValue, setFormValue] = useState(initialState);
  const {loading, error} = useSelector((state) => ({...state.auth}))
  const {email, password} = formValue;
  //hooks initialized to variables
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //side effect to handle error for login
  useEffect(() => {
    error && toast.error(error);
  }, [error])

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
  const googleSuccess = (resp) => {
    const email = resp?.profileObj?.email;
    const name = resp?.profileObj?.name;
    const token = resp?.tokenId;
    const googleId = resp?.googleId;
    const result = { email, name, token, googleId };
    dispatch(googleSignIn({ result, navigate, toast }));
  };
  const googleFailure = (error) => {
    toast.error(error);
  };
  return (
    <div style={{
      margin: "auto", 
      padding: "15px", 
      maxWidth: "450px", 
      alignContent: "center", 
      marginTop: "120px"
      }}
    >
        <MDBCard alignment="center">
          <MDBIcon fas icon="user-circle" className="fa-2x" />
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
          <GoogleLogin
          //google secret key - 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
            clientId="19320938948-9gcj4ta21va6pq97928vke0sqhe7ckdp.apps.googleusercontent.com"
            render={(renderProps) => (
              <MDBBtn
                style={{ width: "100%" }}
                color="danger"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <MDBIcon className="me-2" fab icon="google" /> Google Sign In
              </MDBBtn>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/register">
            <p>Register here if you don't have an account.</p>
            </Link>
          </MDBCardFooter>
        </MDBCard>
      
    </div>
  )
}
export default Login