import axios from "axios";
import { MDBRow } from "mdbreact";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [partsData, setPartsData] = useState([]);
  const page = useRef(1);

  const url =
    "https://dev.livis.ai/api/livis/v1/parts/get_all_parts_pagination/";
  const token = "d1fe7eed4bc2ccbf2bdb716e4bb7760cf14f9419";

  const fetchData = (page = 1) => {
    axios
      .post(url, {
        current_page: page,
        limit_to: 8,
      }, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
          Accept: "*/*",
        },
      })
      .then((data) => {
        // console.log(data?.data?.data)
        const tempData = [...partsData, ...data?.data?.data];
        setPartsData(tempData);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(page.current);
  }, []);

  window.onscroll = function () {
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      fetchData(page.current+1);
      page.current+=1;
    }
  }

  return (
    <>
      <div className="parts-container">
        <div className="m-4">
          <MDBRow className="row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
            {partsData.length &&
              partsData?.map((data, index) => (
                <div key={index}>
                  <Card partData={data} />
                </div>
              ))}
          </MDBRow>
        </div>
      </div>
    </>
  );
}

export default App;
