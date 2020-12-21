import React from "react";
import "./Post.css";
import Footer from "./Footer";
import Cards from "./Cards";

function Test(props) {
  
  return (
    <>
      <div className="container row center-xs">
        <div className="Post">
          <div className="box_1">
            <h1>{props.title}</h1>
          </div>
          <div className="box_2">
            <img className="post__item__img" src={props.src} alt="img" />
          </div>
          <div className="post__container">
            <div className="breadcrumb"></div>
            <h1>Subtitulo</h1>
            <p className="text__block">{props.content}</p>

            <div className="post__gallery">
              {/* Gallery Row*/}
              <div class="post__gallery__row row">
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              {/* Gallery Row*/}
              <div class="post__gallery__row row">
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-xs-2">
                  <div class="box">
                    <img
                      className="post__gallery__img"
                      src={props.src}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="box_5">
              <p className="text__block">{props.Content}</p>
            </div>

            <div className="box_6">
              <img src={props.src} alt="img" />
            </div>

            <div className="box_7">
              <p className="text__block">{props.Content}</p>
            </div>
          </div>
        </div>

        {/*Comment Section*/}

        <div class="post__comment__box">
          <h1> Deja un comentario </h1>

          <textarea
            className="comment__text__area"
            placeholder="comment*"
          ></textarea>

          <div class="input__group row reverse">
            <input className="comment__input" placeholder="Name*" />
            <input className="comment__input" placeholder="Lastname*" />
          </div>

          <div class="comment__button">
            <button type="button submit">Enviar</button>
          </div>
        </div>

        <Cards></Cards>

        {/*End of Container*/}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Test;
