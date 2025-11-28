export default function Navigation({ src }) {
  return (
    <nav className="nav-menu" id="js-nav">
      <ul className="navi">
        {src.map((elem) => (
          <li className={elem.listClass} key={elem.key}>
            {elem.listName}
          </li>
        ))}
      </ul>
    </nav>
  );
}
