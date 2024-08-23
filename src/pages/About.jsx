import images from "../assets/index";

export default function About() {
  return (
    <div className="about-container">
      <div className="left-content">
        <div className="cube">
          #
          <img src={images.sample.SushiDua} />
        </div>
      </div>
      <div className="right-content">
        <h1>Delicious Japanese Cuisine And Sushi</h1>
        <p>
          At our restaurant, we prioritize quality and customer satisfaction,
          offering a wide selection of sushi that delights the senses. From
          nigiri to sashimi, every dish is crafted with meticulous attention to
          detail and taste, using traditional recipes passed down through
          generations. Join us to savor special moments with your family and
          friends at Dishi Japanese Cuisine.
        </p>
      </div>
    </div>
  );
}
