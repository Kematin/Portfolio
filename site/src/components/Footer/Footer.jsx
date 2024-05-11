import React from "react";
import { toast } from "react-toastify";
import cat1 from "../../assets/footer/cat1.png";
import cat2 from "../../assets/footer/cat2.png";
import "./style.css";

function Footer() {
  const meow = (flag, text) => {
    toast.success(text, {
      position: flag ? "bottom-left" : "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      icon: false,
      theme: "dark",
      style: {
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      },
    });
  };
  return (
    <div id="footer">
      <div className="big-cat">
        <img
          onClick={() => {
            meow(true, "😎");
          }}
          src={cat1}
          alt="cat"
        />
      </div>
    </div>
  );
}

export default Footer;
