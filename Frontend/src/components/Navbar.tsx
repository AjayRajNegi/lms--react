import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="app-header">
      <h1>Book Portal</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/add-books">Add Books</Link>
        <Link to="/request-books">Request Books</Link>
        <Link to="/books">Dummy Dynamic Books</Link>
      </nav>
    </header>
  );
}
