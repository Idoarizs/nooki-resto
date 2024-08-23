import NookiResto from "./resto_logo.jpg";
import SushiSatu from "./foods/sushi_1.svg";
import SushiDua from "./foods/sushi_2.svg";
import SushiTiga from "./foods/sushi_3.svg";

import AkuraSushi from "./menu/akura-sushi.jpg";
import DanggoSpecial from "./menu/danggo-2.jpg";
import Danggo from "./menu/danggo.jpg";
import MakiSushi from "./menu/maki-sushi.jpg";
import RamenNoodleSpecial from "./menu/ramen-noodle-2.jpg";
import RamenNoddle from "./menu/ramen-noodle.jpg";
import UdonSpecial from "./menu/udon-2.jpg";
import Udon from "./menu/udon.jpg";

export default {
  logo: NookiResto,
  sample: {
    SushiSatu,
    SushiDua,
    SushiTiga,
  },
  menu: [
    {
      img: AkuraSushi,
      title: "Akura Sushi",
      price: "¥1,200",
      description:
        "Savor the exquisite taste of our Akura Sushi, crafted with the freshest ingredients and traditional techniques for an authentic sushi experience.",
    },
    {
      img: DanggoSpecial,
      title: "Danggo Special",
      price: "¥700",
      description:
        "Try our Danggo Special, an elevated version of the classic Danggo, featuring unique flavors and toppings for an unforgettable treat.",
    },
    {
      img: Danggo,
      title: "Danggo",
      price: "¥500",
      description:
        "Indulge in the sweet and chewy delight of our Danggo, a traditional Japanese treat that’s perfect for any time of the day.",
    },
    {
      img: MakiSushi,
      title: "Maki Sushi",
      price: "¥1,000",
      description:
        "Our Maki Sushi offers a perfect balance of flavor and texture, with fresh fish and crisp vegetables wrapped in seaweed and rice.",
    },
    {
      img: RamenNoodleSpecial,
      title: "Ramen Noodle Special",
      price: "¥1,300",
      description:
        "Experience the ultimate in comfort food with our Ramen Noodle Special, featuring premium ingredients and a broth that’s bursting with flavor.",
    },
    {
      img: RamenNoddle,
      title: "Ramen Noodle",
      price: "¥900",
      description:
        "Enjoy the warmth and comfort of our Ramen Noodle, with rich broth and tender noodles that will leave you craving for more.",
    },
    {
      img: UdonSpecial,
      title: "Udon Special",
      price: "¥1,200",
      description:
        "Our Udon Special takes traditional Udon to the next level, with rich and savory additions that make this dish a true delight.",
    },
    {
      img: Udon,
      title: "Udon",
      price: "¥800",
      description:
        "Taste the hearty goodness of our Udon, with thick and chewy noodles served in a savory broth, perfect for a fulfilling meal.",
    },
  ],
};
