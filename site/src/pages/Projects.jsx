import React from "react";
import microcontrollerImg from "../assets/projects/microcontroller.jpg";
import projectShopImg from "../assets/projects/projectShop.png";
import converterVideoImg from "../assets/projects/converterVideo.png";
import csmoneyBotImg from "../assets/projects/csmoneyBot.png";
import photos from "../assets/projects/photos.jpg";
import fusion from "../assets/projects/fusion.jpeg";

function Projects() {
  return (
    <>
      <div id="projects">
        <div className="project">
          <img src={fusion} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/fusion_work_test.git">
              <h3>Fusion bot</h3>
            </a>
            <p>Магазин одежды</p>
          </div>
        </div>
        <div className="project">
          <img src={photos} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/image_test">
              <h3>API изображений</h3>
            </a>
            <p>
              Тестовое по выгрузке изображений на отдельное s3 + websocket
              оповещение
            </p>
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
          <img src={projectShopImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/project-system">
              <h3>Project shop</h3>
            </a>
            <p>Телеграм магазин по продаже школьных проектов с админ панелью</p>
          </div>
        </div>
        <div className="project">
          <img src={converterVideoImg} alt="" />
          <div className="text">
            <a href="https://github.com/Kematin/convert-video">
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
            <p>Парсер выгодных предложений с CSMoney</p>
          </div>
        </div>
      </div>
      <h3 id="project-text">И это портфолио :)</h3>
    </>
  );
}

export default Projects;
