import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AddBooks from "./pages/AddBooks";
import RequestBooks from "./pages/RequestBooks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <section className="page">
                  <h2>Welcome</h2>
                  <p>Select an option above to manage or request books.</p>
                </section>
              }
            />
            <Route path="/add-books" element={<AddBooks />} />
            <Route path="/request-books" element={<RequestBooks />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
