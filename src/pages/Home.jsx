import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import {getDogs} from "../redux/features/dogSlice";
import { useLocation, useNavigate } from "react-router-dom";
import CardDog from "../components/CardDog";
import Spinner from "../components/Spinner";

const Home = () => {
  const {dogs, loading} = useSelector((state) => ({...state.dog}));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs())
  }, []);

  if(loading) {
    <Spinner />
  }
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1400px",
        alignContent: "center",
      }}>
        <MDBRow className="mt-5">
          {dogs.length === 0 && (
            <MDBTypography className="text-center mb-0" tags="h2">
              <hr />
              loading
              <hr />
              <Spinner />
            </MDBTypography>
          )}
          <MDBCol>
            <MDBContainer>
              <MDBRow className="row-cols-1 row-cols-md-3 g-2">
                {dogs && dogs.map((item, index) => (
                  <CardDog key={index} {...item}/>
                ))};
              </MDBRow>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
    </div>
  )
}
export default Home