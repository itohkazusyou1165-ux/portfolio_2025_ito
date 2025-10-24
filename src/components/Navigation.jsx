export default function Navigation({ src }) {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          listStyleType: "none",
        }}
      >
        {src.map((elem) => (
          <li className={elem.listClass} key={elem.key}>
            {elem.listName}
          </li>
        ))}
      </ul>
    </nav>
  );
}
