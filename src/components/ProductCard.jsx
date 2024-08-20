export default function ProductCard({ img, price, title }) {
  return (
    <div className="product-item">
      <img src={img} alt={title} />
      <div className="description">
        <label>{price}</label>  
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sint?
          Unde placeat nostrum at velit similique nobis eveniet sunt hic
          doloremque veritatis nam in expedita quae voluptas, ab dolorem omnis
          veniam numquam, soluta rem exercitationem est deserunt culpa corrupti!
          Repudiandae ut sit cum possimus harum dicta deserunt aliquam mollitia
          dolore.
        </p>
      </div>
    </div>
  );
}
