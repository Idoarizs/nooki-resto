import images from "../assets/index";

export default function Menu() {
  return (
    <div id="menu" className="menu-container">
      <div className="left-menu-content">
        <div className="special-menu-dish">
          <h1>Sushi Salmon Special Menu Dish</h1>
        </div>

        {/* List Items */}
        <div className="list-items">
          <div className="first-item">
            <p>
              Our Sushi Salmon Special is a delicate combination of the finest
              sushi-grade salmon laid over perfectly seasoned rice. This dish is
              a testament to the art of sushi making, offering a
              melt-in-your-mouth experience with each bite
            </p>
          </div>
          <div className="second-item">
            <p>
              Freshly sliced salmon, premium sushi rice, a touch of wasabi, and
              nori (seaweed). Each element is carefully selected to ensure the
              highest quality and authentic taste.
            </p>
          </div>
          <div className="third-item">
            <p>
              This dish is known for its rich, buttery taste of salmon, balanced
              by the subtle sweetness of the rice. The wasabi adds a slight
              kick, while the nori provides a savory finish.
            </p>
          </div>
        </div>
      </div>
      <div className="right-menu-content">
        <div className="r-img-content">
          <img src={images.sample.SushiTiga} />
        </div>
      </div>
    </div>
  );
}
