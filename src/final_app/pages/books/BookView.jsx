import "final_app/assets/scss/style.scss";
import { useStore } from "final_app/store/Store";
import { Link } from "react-router-dom";
import Button from "shared/Button/Button";
import { useNavigate } from "react-router-dom";

const BookView = () => {
  const navigate = useNavigate();
  const [globalState, dispatch] = useStore();
  const bookList = globalState.book;

  const handleAddBook = () => {
    navigate("/books/new");
  };

  return (
    <main style={{ marginTop: "4rem", padding: "0rem 4rem" }}>
      <div className="BookView">
        <Button onClick={handleAddBook}>Add Book</Button>
        {!bookList || bookList.length === 0 ? <h2>No Books</h2> : ""}
        <ul>
          {bookList &&
            bookList.map((book, index) => {
              return (
                <li className="list-item">
                  {book.email} ({book.name})
                  <span className="list-action">
                    <Link to={"/book/edit/" + index}>Edit</Link>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </main>
  );
};

export default BookView;
