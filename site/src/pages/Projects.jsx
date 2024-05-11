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
              <h3>Магазин проектов ⭐</h3>
            </a>
            <p>
              Телеграм магазин (бот) по продаже школьных проектов с готовой
              админ панелью
            </p>
          </div>
        </div>
        <div className="project">
          <img src={converterVideoImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/Telegram-Bots/tree/main/ConvertVideoToAudio">
              <h3>Конвертер видео</h3>
            </a>
            <p>
              Телеграм бот, который конвертирует видео с ютуб/файл в аудио
              формат
            </p>
          </div>
        </div>
        <div className="project">
          <img src={csmoneyBotImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/Parsers/tree/main/CSMoney">
              <h3>Парсер скинов</h3>
            </a>
            <p>Асинхронный парсер выгодных предложений с CSMoney с тг ботом</p>
          </div>
        </div>
        <div className="project">
          <img src={keyboardShopImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/Keyboard-Shop">
              <h3>Магазин клавиатур</h3>
            </a>
            <p>Онлайн магазин по продаже клавиатур (geekboards like)</p>
          </div>
        </div>
        <div className="project">
          <img src={microcontrollerImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/School-Project">
              <h3>Микроконтроллеры</h3>
            </a>
            <p>Сайт-визитка для изучения микроконтроллеров</p>
          </div>
        </div>
        <div className="project">
          <img src={fiveParserImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/Parsers/tree/main/FiveShopParser">
              <h3>Парсер скидок</h3>
            </a>
            <p>Асинхронный парсер выгодных предложений пятерочки с тг ботом</p>
          </div>
        </div>
        <div className="project">
          <img src={gptAssistantImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/chatgpt-assistant">
              <h3>GPT Assitant</h3>
            </a>
            <p>Сайт для использования ChatGPT с гибкими настройками</p>
          </div>
        </div>
        <div className="project">
          <img src={weatherImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/WEB-projects/tree/master/WeatherApp">
              <h3>Погодное приложение ❤️</h3>
            </a>
            <p>Веб приложение для информирования о погоде (первый проект) </p>
          </div>
        </div>
      </div>
      <h3 id="project-text">И это портфолио :)</h3>
    </>
  );
}

export default Projects;
