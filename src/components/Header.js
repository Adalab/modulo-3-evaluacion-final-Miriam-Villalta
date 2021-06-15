import image from "../images/Rick_and_Morty_-_logo_(English).png";
function Header() {
  return (
    <header className="header-image">
      <img src={image} alt="header-logo" className="header-image__img" />
    </header>
  );
}

export default Header;
