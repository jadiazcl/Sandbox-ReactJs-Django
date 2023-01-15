import React from "react";

export default function DetailPost() {
  const queryParameters = new URLSearchParams(window.location.search);
  const id_post = queryParameters.get("id_post");
  console.log("yes");
  return (
    <div>
      <h1>Hola que tal contacto {id_post} </h1>
    </div>
  );
}
