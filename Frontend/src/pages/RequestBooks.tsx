import "./Page.css";

const RequestBooks = () => {
  return (
    <div className="page">
      <h1>Request Books</h1>
      <p>Use this page to request books that are not currently available.</p>
      {/* You can replace this with a real request form later */}
      <form className="page-form">
        <label>
          Book title
          <input type="text" placeholder="Which book do you want?" />
        </label>
        <label>
          Additional details
          <textarea placeholder="Edition, publisher, etc." rows={4} />
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestBooks;
