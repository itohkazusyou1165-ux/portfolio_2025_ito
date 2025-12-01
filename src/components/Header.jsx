import { useState } from "react";
import Logo from "./Logo";
import navList from "./navigationList";

export default function Header() {
  const [open, setopen] = useState(false);
  const togglemenu = () => {
    setopen(!open);
  };

  return (
    <header className="header">
      <Logo />

      <button
        className={open ? "hamburger active" : "hamburger"}
        onClick={togglemenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={open ? "nav-menu active" : "nav-menu"} id="js-nav">
        <ul className="navi">
          {navList.map((elem) => (
            <li className={elem.listClass} key={elem.key}>
              <a href={elem.link} onClick={() => setopen(false)}>
                {elem.listName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
