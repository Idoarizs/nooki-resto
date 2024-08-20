import images from "../assets/index"

export default function Main() {
  return (
    <div id="aboutus" className="main-container">
      <div className="left-container">
        <h1>Dishi Japanese Cuisine And Sushi at Its Finest</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          corrupti dignissimos. Sapiente dicta minima quaerat blanditiis
          dolores, repudiandae nisi omnis, aliquam, est eos praesentium
          architecto dolorum non explicabo veniam quia.
        </p>
        <div className="reservation-button">
          <a className="reservation" href="/">Reservation</a>
          <a className="reservation-video" href="/">How to Reservation</a>
        </div>
      </div>
      <div className="right-container">
        <img src={images.sample.SushiSatu} />
      </div>
    </div>
  );
}
