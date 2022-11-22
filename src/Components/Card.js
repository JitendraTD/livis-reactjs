import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBCardHeader,
  MDBFooter,
  MDBBtn,
  MDBIcon,
  MDBBadge,
} from "mdb-react-ui-kit";

const Card = () => {
  return (
    <MDBCol>
      <MDBCard className="border-5">
        <MDBCardHeader>
          <div className="row">
            <div className="col-9">Card Header Name</div>
            <div className="col-3">CHM...</div>
          </div>
        </MDBCardHeader>

        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/city/041.webp"
          alt="..."
          position="top"
          className="p-2 image-border"
        />

        {/* Labels and View Inference */}

        <div className="row d-flex justify-content-around">
          <div className="col-9">
            <MDBBadge pill color='success' light>Automotive</MDBBadge>
          </div>
          <div className="col-3">
            <MDBBtn>
              <MDBIcon fas icon="play" />
            </MDBBtn>
          </div>
        </div>

        {/* Card Info */}
        <div className="row d-flex text-center justify-content-around mt-3">
          <div className="col-3">
            <p>Labelled</p>
            <p className="fs-4">
              10<span>%</span>
            </p>
          </div>
          <div className="col-3">
            <p>Version</p>
            <p className="fs-4">5</p>
          </div>
          <div className="col-3">
            <p>Faility</p>
            <p className="fs-4">2</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mb-2 mx-2 row text-center card-footer image-border p-1 ">
          <div className="col-9 row">
            <div className="col-5 d-flex align-items-center">
              <p className="fs-4 m-0">X%</p>
            </div>
            <div className="col-7 d-flex align-items-center">Accuracy</div>
          </div>
          <div className="col-3">
            <MDBBtn color="info" size="md" className="my-2">
              Train
            </MDBBtn>
          </div>
        </div>
      </MDBCard>
    </MDBCol>
  );
};

export default Card;
