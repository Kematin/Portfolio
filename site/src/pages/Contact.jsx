import React from "react";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import telegram from "../assets/contacts/telegram.png";
import vk from "../assets/contacts/vk.png";
import discord from "../assets/contacts/discord.png";
import steam from "../assets/contacts/steam.png";
import github from "../assets/contacts/github.png";

function Contact() {
  const copyText = (text) => {
    copy(text);
    toast.success("Copied to clipboard!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      },
    });
  };
  return (
    <div id="contact">
      <div className="mail">
        <a href="mailto:kematin@inbox.ru">
          <h2>kematin@inbox.ru</h2>
        </a>
        <button
          onClick={() => {
            copyText("kematin@inbox.ru");
          }}
        >
          Copy
        </button>
      </div>
      <div className="contacts">
        <a
          href="https://t.me/kematinl
          "
        >
          <img src={telegram} alt="" />
          <h3>@kematinl</h3>
        </a>
        <a
          href="https://vk.com/kematin
          "
        >
          <img src={vk} alt="" />
          <h3>Kematin</h3>
        </a>
        <a
          onClick={(event) => {
            copyText("#kem0104");
            console.log("Copy");
            event.preventDefault();
          }}
          href="
          "
        >
          <img src={discord} alt="" />
          <h3>#kem0104</h3>
        </a>
        <a
          href="https://steamcommunity.com/id/kematin_cool
          "
        >
          <img src={steam} alt="" />
          <h3>kematin_cool</h3>
        </a>
        <a
          href="https://github.com/Kematin
          "
        >
          <img src={github} alt="" />
          <h3>Kematin</h3>
        </a>
      </div>
    </div>
  );
}

export default Contact;
