export default function Header({ children }) {
  return (
    <header
      style={{
        width: 1000,
        padding: 16,
        backgroundColor: "#eee",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </header>
  );
}
