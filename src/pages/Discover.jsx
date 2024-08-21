import images from "../assets/index";

// Components
import ProductCard from "../components/ProductCard";

export default function Discover() {
  return (
    <div id="foods" className="discover-container">
      <div className="discover-intro">
        <h1>Discover Our Menu</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          voluptatum autem cupiditate expedita distinctio ducimus impedit a
          odit, aspernatur rerum repudiandae tempora atque? Adipisci cumque modi
          quae laboriosam eos deleniti deserunt nisi officia maxime accusamus.
        </p>
      </div>

      <div className="discover-menu">
        <div className="l-nav-content">
          <a>All</a>
          <a>Sushi Nooki</a>
          <a>Ramen Nooki</a>
          <a>Udon Nooki</a>
          <a>Danggo Nooki</a>
          <a>Others Menu</a>
        </div>
        <div className="r-menu-content">
          <div className="product-list">
            <ProductCard
              img={images.menu.AkuraSushi}
              title="Akura Sushi"
              price="Rp.5000"
            />
            <ProductCard
              img={images.menu.Danggo}
              title="Danggo"
              price="Rp.2500"
            />
            <ProductCard
              img={images.menu.MakiSushi}
              title="Maki Sushi"
              price="Rp.3200"
            />
            <ProductCard
              img={images.menu.RamenNoddle}
              title="Ramen Noodle"
              price="Rp.15000"
            />
            <ProductCard img={images.menu.Udon} title="Udon" price="Rp.4500" />
            <ProductCard
              img={images.menu.DanggoSpecial}
              title="Danggo Special"
              price="Rp.5500"
            />
            <ProductCard
              img={images.menu.RamenNoodleSpecial}
              title="Ramen Noodle Special"
              price="Rp.20000"
            />
            <ProductCard
              img={images.menu.UdonSpecial}
              title="Udon Special"
              price="Rp.8000"
            />
          </div>
          <div className="more-menu">
            <a href="#">See More Menu</a>
          </div>
        </div>
      </div>
    </div>
  );
}
