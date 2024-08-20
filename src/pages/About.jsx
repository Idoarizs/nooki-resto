import images from "../assets/index"

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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit a,
          aliquam non similique ipsa et temporibus! Sequi eius officiis facilis
          asperiores, eveniet reiciendis expedita veritatis veniam vel! Neque
          repudiandae, ea rem nisi delectus veritatis quia, harum quaerat vero
          expedita minus quae commodi, nemo excepturi. Quaerat blanditiis ipsum
          ratione. Repellat, earum!
        </p>
      </div>
    </div>
  );
}
