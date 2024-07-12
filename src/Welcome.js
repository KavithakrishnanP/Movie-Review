import React from "react";
import "./App.css";

export default function Welcome() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item  c-item">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/l01blow0/poster/z/1/d/medium-1-to-12-doctor-hut-christopher-accleston-david-tennant-original-imagbx2pjhensapw.jpeg?q=90&crop=false"
            className="d-block w-100 c-img"
            alt=""
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Lights, camera, action!</h5>
          </div>
        </div>
        <div className="carousel-item active c-item ">
          <img
            src="https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1626814026160-2237a95fc5a0%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fh%253D84%2526txt%253Dmovie%252Bposter%2526txt-align%253Dmiddle%25252Cleft%2526txt-clip%253Dellipsis%2526txt-color%253D000000%2526txt-pad%253D80%2526txt-size%253D40%2526txt-width%253D660%2526w%253D750%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D750%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8Mnx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8fHwxNzE2MjI4MjA4fDA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60"
            className="d-block w-100 c-img"
            alt=""
          />
          <div className="carousel-caption d-none d-md-block">
            <h3
              style={{
                color: "rgb(46, 226, 178)",
                fontWeight: "bold",
                textDecoration: "double",
              }}
            >
              The Movie Review App
            </h3>
            <h5>
              The most honest form of filmmaking is to make a film for yourself.
            </h5>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden"></span>
      </button>
    </div>
  );
}
