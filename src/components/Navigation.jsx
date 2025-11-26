export default function Navigation({ src }) {
  return (
    <nav class="nav-menu" id="js-nav">
      <ul class="navi">
        {src.map((elem) => (
          <li className={elem.listClass} key={elem.key}>
            {elem.listName}
          </li>
        ))}
      </ul>
    </nav>
  );
}
