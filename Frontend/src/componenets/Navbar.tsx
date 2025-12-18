export default function Navbar() {
  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyItems: "centef",
        padding: "20px",
        gap: "10px",
      }}
    >
      <span style={{ fontSize: "20px", fontWeight: 700, cursor: "pointer" }}>
        LBM
      </span>
      <ul style={{ display: "flex", gap: "10px" }}>
        <li style={{ listStyleType: "none", cursor: "pointer" }}>Add Books</li>
        <li style={{ listStyleType: "none", cursor: "pointer" }}>
          Request Books
        </li>
      </ul>
    </nav>
  );
}
