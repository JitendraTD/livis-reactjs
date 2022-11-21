import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";

const Card = () => {
  return (
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/city/041.webp"
          alt="..."
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Card;
