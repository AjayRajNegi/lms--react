import { FormEvent, useEffect, useState } from "react";
import "./Page.css";

type Book = {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  publishedDate?: string;
};

const API_BASE_URL = "http://localhost:5000/api";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      setError(null);
      const res = await fetch(`${API_BASE_URL}/books`);
      if (!res.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await res.json();
      setBooks(data.data || []);
    } catch (err) {
      console.error(err);
      setError("Could not load books. Please try again.");
    }
  };

  useEffect(() => {
    // Load current books when the page mounts
    void fetchBooks();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!title.trim() || !author.trim()) {
      setError("Title and author are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          author,
          isbn: isbn || undefined,
          publishedDate: publishedDate || undefined,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || "Failed to add book");
      }

      const body = await res.json();
      setSuccess("Book added successfully!");
      // Append the new book to the list
      if (body.data) {
        setBooks((prev) => [body.data as Book, ...prev]);
      } else {
        // Fallback: refetch all
        void fetchBooks();
      }

      // Reset form
      setTitle("");
      setAuthor("");
      setIsbn("");
      setPublishedDate("");
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Add Books</h1>
      <p>Use this page to add new books to the catalog.</p>

      <form className="page-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Author
          <input
            type="text"
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          ISBN (optional)
          <input
            type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </label>
        <label>
          Published Date (optional)
          <input
            type="date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>

      {error && <p className="page-message error">{error}</p>}
      {success && <p className="page-message success">{success}</p>}

      <section style={{ marginTop: "2rem" }}>
        <h2>Current Books</h2>
        {books.length === 0 ? (
          <p>No books in the catalog yet.</p>
        ) : (
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
                {book.isbn && ` (ISBN: ${book.isbn})`}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AddBooks;
