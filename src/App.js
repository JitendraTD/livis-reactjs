import { MDBRow } from "mdbreact";
import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="parts-container">
        <div className="m-4">
          <MDBRow className="row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            <Card />
          </MDBRow>
        </div>
      </div>
    </>
  );
}

export default App;
