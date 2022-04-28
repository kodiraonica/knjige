import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <ul>
      <li className="list-item">
        <Link to="/books/">View Books</Link>;
      </li>
      <li className="list-item">
        <Link to="/books/new/">Add Book</Link>;
      </li>

      <li className="list-item">
        <Link to="/users/">Add User</Link>;
      </li>
      <li className="list-item">
        <Link to="/users/new">Add User</Link>;
      </li>
    </ul>
  );
}
