import React from "react";

export default function Item({ className, src, alt, name }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
      <h6>{name}</h6>
    </div>
  );
}
