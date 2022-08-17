import { useNavigate } from "react-router-dom";
import {MDBBtn} from "mdb-react-ui-kit";

const Page404 = () => {
  const navigate = useNavigate();
  const handle404 = () => {
    return navigate("/")
  }
  return (
    <div className="container-404">
      <MDBBtn style={{top: "50rem"}} onClick={handle404}>Back to home</MDBBtn>
      <img style={{width: "100%", height: "100%"}} src="/images/page404error.png" alt="404-page"/>
    </div>
  )
};
export default Page404