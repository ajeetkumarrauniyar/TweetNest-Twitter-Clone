import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 left-sidebar-menu border border-danger">

        </div>
        <div className="col-md-6 center-all-tweets border border-success">
          <h1>2 of 3</h1>
        </div>
        <div className="col-md-3 right-sidebar-widgets border border-info">
          <h1>3 of 3 </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
