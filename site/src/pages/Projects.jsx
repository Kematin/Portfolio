import React from "react";
import keyboardShopImg from "../assets/projects/keyboardShop.png";
import microcontrollerImg from "../assets/projects/microcontroller.png";
import projectShopImg from "../assets/projects/projectShop.png";
import converterVideoImg from "../assets/projects/converterVideo.png";
import fiveParserImg from "../assets/projects/fiveParser.png";
import csmoneyBotImg from "../assets/projects/csmoneyBot.png";
import gptAssistantImg from "../assets/projects/gptAssistant.png";
import weatherImg from "../assets/projects/weather.png";

function Projects() {
  return (
    <>
      <div id="projects">
        <div className="project">
          <img src={projectShopImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/Telegram-Bots/tree/main/SellProjectBot">
              <h3>Project System ⭐</h3>
            </a>
            <p>Ready Telegram store with implemented admin panel</p>
          </div>
        </div>
        <div className="project">
          <img src={converterVideoImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/Telegram-Bots/tree/main/ConvertVideoToAudio">
              <h3>Video converter bot</h3>
            </a>
            <p>
              Telegram bot to convert video to audio from youtube or from a file
            </p>
          </div>
        </div>
        <div className="project">
          <img src={csmoneyBotImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/Parsers/tree/main/CSMoney">
              <h3>Skin Parser</h3>
            </a>
            <p>
              Asynchronous parser of profitable CSMoney offers with Telegram bot
            </p>
          </div>
        </div>
        <div className="project">
          <img src={keyboardShopImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/Keyboard-Shop">
              <h3>KeyboardShop</h3>
            </a>
            <p>Online store selling keyboards</p>
          </div>
        </div>
        <div className="project">
          <img src={microcontrollerImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/School-Project">
              <h3>Microcontrollers</h3>
            </a>
            <p>A site for learning about microcontrollers</p>
          </div>
        </div>
        <div className="project">
          <img src={fiveParserImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/Parsers/tree/main/FiveShopParser">
              <h3>Stock parser</h3>
            </a>
            <p>Asynchronous Parser of "Five" shares with Telegram bot</p>
          </div>
        </div>
        <div className="project">
          <img src={gptAssistantImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/chatgpt-assistant">
              <h3>GPT Assitant</h3>
            </a>
            <p>Layer to use ChatGPT with flexible api customization</p>
          </div>
        </div>
        <div className="project">
          <img src={weatherImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/WEB-projects/tree/master/WeatherApp">
              <h3>Weather App ❤️</h3>
            </a>
            <p>Web applications for weather detection (First project)</p>
          </div>
        </div>
      </div>
      <h3 id="project-text">And also this portfolio :)</h3>
    </>
  );
}

export default Projects;
