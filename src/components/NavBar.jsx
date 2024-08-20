import images from "../assets/index.js";

export default function NavBar() {
  return (
    <div className="navbar">
      <img src={images.logo} alt="logo" width={150} height={150} />
      <div className="items">
        <a href="#menu">Menu</a>
        <a href="#foods">Foods</a>
        <a href="#aboutus">About Us</a>
        <a id="contactus">
          Contact Us
        </a>
      </div>
    </div>
  );
}
