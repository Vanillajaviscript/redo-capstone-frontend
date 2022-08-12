import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const CardDog = ({
  imageFile,
  description,
  dogName,
  tags,
  _id,
  name,
}) => {

  const excerpt = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };

  return (
    <MDBCardGroup>
      <MDBCard className="h-100 mt-2 d-sm-flex" style={{ maxWidth: "20rem" }}>
        <MDBCardImage
          src={imageFile}
          alt={dogName}
          position="top"
          style={{ maxWidth: "100%", height: "180px" }}
        />
        <div className="top-left" style={{color: "white", textShadow: "2px 2px 2px black"}}>{name}</div>
        <span className="text-start tag-card">
          {tags.map((tag, index) => (
            <Link key={index} to={`/dogs/tag/${tag}`}>
              {" "}
              #{tag}
            </Link>
          ))}
        </span>
        <MDBCardBody>
          <MDBCardTitle className="text-start" >{dogName}</MDBCardTitle>
          <MDBCardText className="text-start">
            {excerpt(description)}
            <Link to={`/dog/${_id}`}> See more...</Link>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
};

export default CardDog;