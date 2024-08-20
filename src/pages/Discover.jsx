import images from "../assets/index";

// Components
import ProductCard from "../components/ProductCard";

export default function Discover() {
  return (
    <div id="foods" className="discover-container">
      <div className="discover-intro">
        <h1>Discover Our Menu</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          incidunt! Illo delectus consequuntur dolor enim error magnam nisi in
          nemo.
        </p>
      </div>

      <div className="discover-menu">
        <div className="l-nav-content">
          <a href="#">All</a>
          <a href="#">Sushi Nooki</a>
          <a href="#">Ramen Nooki</a>
          <a href="#">Udon Nooki</a>
          <a href="#">Danggo Nooki</a>
          <a href="#">Others Menu</a>
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
