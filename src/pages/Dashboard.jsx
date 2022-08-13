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
import { getDogsByUser, deleteDog } from "../redux/features/dogSlice";
import Spinner from "../components/Spinner";
import {toast} from "react-toastify";

const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userDogs, loading} = useSelector((state) => ({ ...state.dog }));
  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getDogsByUser(userId));
    }
  }, [userId]);

  const excerpt = (str) => {
    if (str.length > 40) {
      str = str.substring(0, 40) + " ...";
    }
    return str;
  };

  if(loading) {
    <Spinner />
  }
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to remove this dog?")) {
      dispatch(deleteDog({id, toast}))
    };
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "120px",
        maxWidth: "900px",
        alignContent: "center",
      }}
    >
            <>
              <h1 className="text-center" style={{ color: "#ffffff"}}>
                Dogs created by {user?.result?.name}</h1>
                <hr style={{ maxWidth: "570px" }} />
            </>
      {userDogs && userDogs.map((item) => (
          <MDBCardGroup key={item._id}>
            <MDBCard style={{ maxWidth: "600px", color: "black", backgroundColor: "#ffffffb9", boxShadow: "0px 0px 9px 1px black"}} className="mt-2">
              <MDBRow className="g-0">
                <MDBCol md="4">
                  <MDBCardImage
                    className="rounded"
                    src={item.imageFile}
                    alt={item.dogName}
                    fluid
                  />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody>
                    <MDBCardTitle className="text-start">
                      {item.dogName}
                    </MDBCardTitle>
                    <MDBCardText className="text-start" >
                      <small className="text-monospace" >
                        {excerpt(item.description)}
                      </small>
                    </MDBCardText>
                    <div
                      style={{
                        marginLeft: "5px",
                        float: "right",
                        marginTop: "-60px",
                      }}
                    >
                      <MDBBtn className="mt-1" tag="a" color="none">
                        <MDBIcon
                          fas
                          icon="trash"
                          style={{ color: "#b01500" }}
                          size="lg"
                          onClick={() => handleDelete(item._id)}
                        />
                      </MDBBtn>
                      <Link to={`/editdog/${item._id}`}>
                        <MDBIcon
                          fas
                          icon="edit"
                          style={{ color: "#2971a7", marginLeft: "10px" }}
                          size="lg"
                        />
                      </Link>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCardGroup>
        ))}
    </div>
  );
};

export default Dashboard;