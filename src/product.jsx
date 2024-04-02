import React from "react";
import { useNavigate } from "react-router-dom";
function Datas({ data }) {
  const navigate = useNavigate();

  return (
    <div className="row" >
      {data.map((item) => (
        <div className="col-lg-4" key={item.id}>
          <div className="card" style={{ width: "18rem", height:"20rem" }}>
            <img
              src={item.images[0]}
              className="card-img-top"
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title">{item.brand}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">price:{item.price}</p>
              <p className="card-text">rating:{item.rating}</p>
              <button
                onClick={() => {
                  navigate("/data/" + item.id);
                }}
                className="btn btn-primary"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Datas;
