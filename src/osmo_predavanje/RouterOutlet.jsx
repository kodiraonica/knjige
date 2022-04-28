import { BrowserRouter, Link, Outlet, useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookView from "./pages/books/BookView";
import BookAdd from "./pages/books/BookAdd";
import BookEdit from "./pages/books/BookEdit";
import UserView from "./pages/users/UserView";
import UserAdd from "./pages/users/UserAdd";
import UserEdit from "./pages/users/UserEdit";

export default function RouterOutlet() {
  const routes = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "books", element: <BookView /> },
    { path: "books/new", element: <BookAdd /> },
    { path: "books/edit/:id", element: <BookEdit /> },
    { path: "users", element: <UserView /> },
    { path: "users/new", element: <UserAdd /> },
    { path: "users/edit/:id", element: <UserEdit /> },
  ]);

  return routes;
}
