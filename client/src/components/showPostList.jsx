import React from "react";
const ShowPostList = (props) => {
  // console.log(props.url);
  return (
    <div
      style={{
        width: "80%",
        borderBottom: "solid black 1px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0.5rem" }}>{props.title}</h1>
        <div
          style={{
            margin: "0.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "50vh",
          }}
        >
          <img
            style={{ width: "100%", height: "100%", textAlign: "center" }}
            src={props.url}
          />
        </div>
        <div
          style={{
            margin: "0.5rem",
          }}
        >
          {props.description}
        </div>
      </div>
      <hr />
    </div>
  );
};
export default ShowPostList;
