import React from "react";

export default function Item(props) {
  return (
    <div className={props.className}>
      <img src={props.src} alt={props.alt} />
      <h6>{props.name}</h6>
    </div>
  );
}
