import images from "../assets/index";
import ProductCard from "../components/ProductCard";

export default function Discover() {
  return (
    <div id="foods" className="discover-container">
      <div className="discover-intro">
        <h1>Discover Our Menu</h1>
        <p>
          Embark on a flavorful journey through Japan’s rich culinary
          traditions. Our menu is carefully curated to offer an authentic taste
          of Japan, from the fresh and delicate Akura Sushi to the hearty and
          satisfying Ramen Noodle. Experience the perfect blend of flavors and
          textures in every dish.
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
            {images.menu.map((item) => (
              <ProductCard
                img={item.img}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            ))}
          </div>
          <div className="more-menu">
            <a>See More Menu</a>
          </div>
        </div>
      </div>
    </div>
  );
}
