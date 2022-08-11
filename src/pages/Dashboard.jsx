import { useEffect } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDog, getDogsByUser } from "../redux/features/dogSlice";
import { toast } from "react-toastify";

const Dashboard = () => {
  const {user} = useSelector((state) => ({...state.auth}));
  const {userDogs, loading} = useSelector((state) => ({...state.dog}));
  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogsByUser(userId))
  }, [userId])

  return (
    <div>Dashboard</div>
  )
}
export default Dashboard