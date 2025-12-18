import { FormEvent, useEffect, useState } from "react";
import "./Page.css";

type BookRequest = {
  id: string;
  bookTitle: string;
  author: string;
  requesterName: string;
  requesterEmail: string;
  status: "pending" | "approved" | "rejected";
};

const API_BASE_URL = "http://localhost:5000/api";

const RequestBooks = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [requesterEmail, setRequesterEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [requests, setRequests] = useState<BookRequest[]>([]);

  const fetchRequests = async () => {
    try {
      setError(null);
      const res = await fetch(`${API_BASE_URL}/book-requests`);
      if (!res.ok) {
        throw new Error("Failed to fetch book requests");
      }
      const data = await res.json();
      setRequests(data.data || []);
    } catch (err) {
      console.error(err);
      setError("Could not load book requests. Please try again.");
    }
  };

  useEffect(() => {
    // Load current requests when the page mounts
    void fetchRequests();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (
      !bookTitle.trim() ||
      !author.trim() ||
      !requesterName.trim() ||
      !requesterEmail.trim()
    ) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/book-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookTitle,
          author,
          requesterName,
          requesterEmail,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || "Failed to submit request");
      }

      const body = await res.json();
      setSuccess("Book request submitted successfully!");
      if (body.data) {
        setRequests((prev) => [body.data as BookRequest, ...prev]);
      } else {
        void fetchRequests();
      }

      // Reset form
      setBookTitle("");
      setAuthor("");
      setRequesterName("");
      setRequesterEmail("");
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
      <h1>Request Books</h1>
      <p>Use this page to request books that are not currently available.</p>

      <form className="page-form" onSubmit={handleSubmit}>
        <label>
          Book title
          <input
            type="text"
            placeholder="Which book do you want?"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </label>
        <label>
          Author
          <input
            type="text"
            placeholder="Author of the book"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Your name
          <input
            type="text"
            placeholder="Your name"
            value={requesterName}
            onChange={(e) => setRequesterName(e.target.value)}
          />
        </label>
        <label>
          Your email
          <input
            type="email"
            placeholder="you@example.com"
            value={requesterEmail}
            onChange={(e) => setRequesterEmail(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      {error && <p className="page-message error">{error}</p>}
      {success && <p className="page-message success">{success}</p>}

      <section style={{ marginTop: "2rem" }}>
        <h2>Your Requests</h2>
        {requests.length === 0 ? (
          <p>No book requests yet.</p>
        ) : (
          <ul>
            {requests.map((req) => (
              <li key={req.id}>
                <strong>{req.bookTitle}</strong> by {req.author} —{" "}
                {req.status.toUpperCase()}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default RequestBooks;
