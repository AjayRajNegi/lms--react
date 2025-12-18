import { Link, useParams } from "react-router-dom";
import "./Page.css";

type RouteParams = {
  id: string;
  slug: string;
};

// Same dummy data as in BookList to keep things consistent
const dummyBooks = [
  {
    id: "1",
    slug: "clean-code",
    title: "Clean Code",
    author: "Robert C. Martin",
    description:
      "A handbook of agile software craftsmanship focused on writing clean, maintainable code.",
  },
  {
    id: "2",
    slug: "pragmatic-programmer",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    description:
      "Practical tips and philosophies for becoming a better, more pragmatic developer.",
  },
  {
    id: "3",
    slug: "you-dont-know-js",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    description:
      "A deep dive into the core mechanisms of JavaScript and how the language really works.",
  },
];

const BookDetails = () => {
  const { id, slug } = useParams<RouteParams>();

  const book = dummyBooks.find((b) => b.id === id && b.slug === slug);

  return (
    <div className="page">
      <h1>Book Details (Dynamic Route)</h1>
      <p>
        This page is rendered for the route:
        <code> /books/:id/:slug </code>
      </p>

      <p>
        <strong>Route params:</strong> id = <code>{id}</code>, slug ={" "}
        <code>{slug}</code>
      </p>

      {book ? (
        <>
          <h2>{book.title}</h2>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>{book.description}</p>
        </>
      ) : (
        <p>No matching book found for these params (using dummy data).</p>
      )}

      <p style={{ marginTop: "1.5rem" }}>
        <Link to="/books">Back to dummy book list</Link>
      </p>
    </div>
  );
};

export default BookDetails;
