import React, { Component } from "react";

// Input : liked or disliked
// Output : onClick

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.onLiked) {
    classes += "-o";
  }
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      area-hidden="true"
    />
  );
};

export default Like;
