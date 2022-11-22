import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBCardHeader,
  MDBBtn,
  MDBIcon,
  MDBBadge,
} from "mdb-react-ui-kit";
import { calculatePercent, roundof } from "../Assets/utils";

const Card = (props) => {
  const { partData } = props;
  return (
    <MDBCol>
      <MDBCard className="border-5">
        {/* Card Header */}
        <MDBCardHeader>
          <div className="row">
            <div className="col-9">{partData?.part_number}</div>
            <div className="col-3 d-flex justify-content-end">...</div>
          </div>
        </MDBCardHeader>

        <MDBCardImage
          src={partData?.thumbnail_url}
          alt="..."
          position="top"
          className="p-2 image image-border"
        />

        {/* Labels and View Inference */}

        <div className="row d-flex justify-content-around">
          <div className="col-9">
            {partData?.tags.map((tag, index) => (
              <MDBBadge key={`${index}-${tag}`} className="text-small" pill color="success" light>
                {tag}
              </MDBBadge>
            ))}
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
            <p className="text-small">Labelled</p>
            <p className="fs-4">
              {partData?.label_info?.total_images ? calculatePercent(partData?.label_info?.total_labeled_images, partData?.label_info?.total_images) : 0}<span className="text-small">%</span>
            </p>
          </div>
          <div className="col-3">
            <p className="text-small">Version</p>
            <p className="fs-4">5</p>
          </div>
          <div className="col-3">
            <p className="text-small">Faility</p>
            <p className="fs-4">2</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mb-2 mx-2 row text-center card-footer image-border p-1 ">
          <div className="col-9 row">
            <div className="col-5 d-flex align-items-center">
              <p className="fs-5 m-0">{partData?.experiments?.length ? (roundof(partData?.experiments?.[0]?.yolo_final_MAP)) : `-`}<span className="text-small">%</span></p>
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
