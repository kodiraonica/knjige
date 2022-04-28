import "../../assets/scss/style.scss";
import { useStore } from "../store/Store";
import { Link } from "react-router-dom";

const BookView = () => {
  const [globalState, dispatch] = useStore();
  const bookList = globalState.book;
  return (
    <div className="BookView">
      <ul>
        {bookList.map((book, index) => {
          return (
            <li className="list-item">
              {book.email} ({book.name})
              <span className="list-action">
                <Link to={"/book/" + index}>Edit</Link>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookView;
