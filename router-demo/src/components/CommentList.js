import React from "react";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" 
rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" 
crossorigin="anonymous"></link>
const CommentList = ({ imgs, name, email, content }) => {
  return (
    <>
      <div className="card mb-3 border-0 shadow w-100">
        <div className="row g-0">
          <div className="col-md-2">
            <img className="img-fluid h-100" src={imgs} alt="this is cat image" />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <span className="text-primary fw-bold">Name:</span> {name}
              </h5>
              <p className="card-title ">
                <span className="text-primary fw-bold">Email:</span> {email}
              </p>
              <p className="card-text">{content}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentList;
