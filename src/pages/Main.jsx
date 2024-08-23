import images from "../assets/index";

export default function Main() {
  return (
    <div id="aboutus" className="main-container">
      <div className="left-container">
        <h1>Dishi Japanese Cuisine And Sushi at Its Finest</h1>
        <p>
          Experience the finest sushi with authentic Japanese flavors at Dishi
          Japanese Cuisine. We serve dishes made with the freshest,
          highest-quality ingredients, offering a dining experience that is
          truly unforgettable.
        </p>
        <div className="reservation-button">
          <a className="reservation">
            Reservation
          </a>
          <a className="reservation-video">
            How to Reservation
          </a>
        </div>
      </div>
      <div className="right-container">
        <img src={images.sample.SushiSatu} />
      </div>
    </div>
  );
}
