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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
              cumque repudiandae quos mollitia architecto itaque minima suscipit
              cupiditate harum molestiae!
            </p>
          </div>
          <div className="second-item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              expedita distinctio, possimus nesciunt praesentium maxime ut
              aliquid cum sit alias.
            </p>
          </div>
          <div className="third-item">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem
              consequuntur consectetur repellat sunt totam id quis ipsum
              doloremque illo.
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
