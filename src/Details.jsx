import React from "react";
import { useParams } from "react-router-dom";

function Detail({ data }) {
  const { id } = useParams();
  const product = data[id];
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product.images[0]}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.brand}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">price:{product.price}</p>
          <p className="card-text">rating:{product.rating}</p>
        </div>
        <button className="bt" >-</button>
        <span className="span4">number</span>
        <button className="bt" >+</button>
      </div>
    </div>
  );
}

export default Detail;
