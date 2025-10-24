export default function ListItem({
  listName = "メニュー",
  listClass = "baseClass",
  style,
}) {
  return (
    <>
      <li className={listClass} style={style}>
        {listName}
      </li>
    </>
  );
}
