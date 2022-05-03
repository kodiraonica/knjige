import { useRoutes } from "react-router-dom";
import Homepage from "final_app/pages/Homepage";
import BookView from "final_app/pages/books/BookView";
import BookAdd from "final_app/pages/books/BookAdd";
import BookEdit from "final_app/pages/books/BookEdit";
import UserView from "final_app/pages/users/UserView";
import UserAdd from "final_app/pages/users/UserAdd";
import UserEdit from "final_app/pages/users/UserEdit";
import Login from "final_app/pages/Login.jsx";

export default function RouterOutlet() {
  const routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/login", element: <Login /> },
    { path: "books", element: <BookView /> },
    { path: "books/new", element: <BookAdd /> },
    { path: "books/edit/:id", element: <BookEdit /> },
    { path: "users", element: <UserView /> },
    { path: "users/new", element: <UserAdd /> },
    { path: "users/edit/:id", element: <UserEdit /> },
  ]);

  return routes;
}
