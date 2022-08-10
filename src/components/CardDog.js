import {
  MDBCard, 
  MDBCardBody, 
  MDBCardTitle, 
  MDBCardText, 
  MDBCardImage, 
  MDBCardGroup} from "mdb-react-ui-kit";

const CardDog = ({imageFile, description, name, tags, _id}) => {

  const excerpt = (str) => {
  if(str.length > 45) {
    str = str.substring(0, 45) + "...";
    }
    return str
  };

  return (
    <MDBCardGroup>
      <MDBCard className="h-100 mt-2 d-sm-flex" style={{maxWidth: "20rem"}}>
        <MDBCardImage
          src={imageFile}
          alt={name}
          position="top"
          style={{maxWidth: "100%", height: "180px"}}
          >
            <div className="top-left">{name}</div>
            <span className="text-start tag-card">
              {tags.map((item) => `#${item}`)}
            </span>
            <MDBCardBody>
              <MDBCardTitle className="text-start">
                {name}
              </MDBCardTitle>
              <MDBCardTitle className="text-start">
                {excerpt(description)}
              </MDBCardTitle>
            </MDBCardBody>
        </MDBCardImage>
      </MDBCard>
    </MDBCardGroup>
  )
}
export default CardDog