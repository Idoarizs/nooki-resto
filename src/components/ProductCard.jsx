export default function ProductCard({ img, price, title, description }) {
  return (
    <div className="product-item">
      <img src={img} alt={title} />
      <div className="description">
        <label>{price}</label>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
