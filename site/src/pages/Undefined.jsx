import React from "react";
import notFound from "../assets/not_found.jpg";

function Undefined() {
  return (
    <div id="undefined">
      <h1>Not Found</h1>
      <img
        onClick={() => {
          alert("😈 👉 🚪");
        }}
        src={notFound}
        alt=""
      />
    </div>
  );
}

export default Undefined;
