import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import {  getDog } from "../redux/features/dogSlice";

const SingleDog = () => {
  const dispatch = useDispatch();
  const { dog } = useSelector((state) => ({ ...state.dog }));
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    if (id) {
      dispatch(getDog(id));
    }
    
  }, [id]);
  return (
    <>
      <MDBContainer>
        <MDBCard className="mb-3 mt-2">
          <MDBCardImage
            position="top"
            style={{ width: "100%", maxHeight: "600px" }}
            src={dog.imageFile}
            alt={dog.dogName}
          />
          <MDBCardBody>
            <MDBBtn
              tag="a"
              color="none"
              style={{ float: "left", color: "#000000" }}
              onClick={() => navigate("/")}
            >
              <MDBIcon
                fas
                className="fa-2x"
                size="lg"
                icon="hand-point-left"
                style={{ float: "left" }}
              />
            </MDBBtn>
            <h3 className="text-center">{dog.dogName}</h3>
            <span>
              <p className="text-start dogName">Created By: {dog.name}</p>
            </span>
            <div style={{ float: "left" }}>
              <span className="text-start">
                {dog && dog.tags && dog.tags.map((item) => `#${item} `)}
              </span>
            </div>
            <br />
            <MDBCardText className="text-start mt-2">
              <MDBIcon
                style={{ float: "left", margin: "5px" }}
                far
                icon="calendar-alt"
                size="lg"
              />
              <small className="text-muted">
                {moment(dog.createdAt).fromNow()}
              </small>
            </MDBCardText>
            <MDBCardText className="lead mb-0 text-start">
              {dog.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default SingleDog;