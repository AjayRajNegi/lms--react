const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let books = [
  {
    id: 1,
    title: "book1",
  },
  {
    id: 2,
    title: "book2",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our book store.",
  });
});

app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === parseInt(req.params.id));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found!",
    });
  }
});

app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `book${Math.floor(Math.random() * 1000)}`,
  };

  books.push(newBook);
  res.status(200).json({ data: newBook, message: "New book added." });
});

app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find(
    (bookItem) => bookItem.id === parseInt(req.params.id)
  );
  console.log(findCurrentBook);

  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: "Book updates",
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

app.delete("/delete/:id", (req, res) => {
  const findBook = books.find((item) => item.id === parseInt(req.params.id));

  if (findBook !== -1) {
    const deletedBook = books.splice(findBook, 1);
    res.status(200).json({
      message: "Book deleted.",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({ message: "Error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running.");
});
