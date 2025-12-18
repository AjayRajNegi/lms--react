import { Link } from "react-router-dom";
import "./Page.css";

type BookSummary = {
  id: string;
  slug: string;
  title: string;
  author: string;
};

// Dummy data for demonstrating dynamic routes with multiple params
const dummyBooks: BookSummary[] = [
  {
    id: "1",
    slug: "clean-code",
    title: "Clean Code",
    author: "Robert C. Martin",
  },
  {
    id: "2",
    slug: "pragmatic-programmer",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
  },
  {
    id: "3",
    slug: "you-dont-know-js",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
  },
];

const BookList = () => {
  return (
    <div className="page">
      <h1>Books (Dummy)</h1>
      <p>
        These links demonstrate{" "}
        <strong>dynamic routes with multiple URL params</strong>.
      </p>

      <ul>
        {dummyBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}/${book.slug}`}>
              <strong>{book.title}</strong> by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
