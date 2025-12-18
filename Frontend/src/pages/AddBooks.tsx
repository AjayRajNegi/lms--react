import "./Page.css";

const AddBooks = () => {
  return (
    <div className="page">
      <h1>Add Books</h1>
      <p>Use this page to add new books to the catalog.</p>
      {/* You can replace this with a real form later */}
      <form className="page-form">
        <label>
          Title
          <input type="text" placeholder="Book title" />
        </label>
        <label>
          Author
          <input type="text" placeholder="Author name" />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
