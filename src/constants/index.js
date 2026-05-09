import logo from "./../assets/logo.png";
import instagramLogo from "./../assets/instagram.svg";
import facebookLogo from "./../assets/facebook.svg";
import heroImage from "./../assets/heroImage.png";

const pages = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Materials",
    route: "/materials",
  },
  {
    id: 3,
    name: "About Us",
    route: "/about",
  },
  {
    id: 4,
    name: "Contact Us",
    route: "/contact",
  },
];

const materials = [
  { id: 1, route: "mathquests", text: "Mathematics Questions" },
  { id: 2, route: "engquests", text: "English Questions" },
  { id: 3, route: "mathpapers", text: "Mathematics Past Papers" },
  { id: 4, route: "engpapers", text: "English Past Papers" },
];

export { logo, pages, instagramLogo, facebookLogo, heroImage, materials };
