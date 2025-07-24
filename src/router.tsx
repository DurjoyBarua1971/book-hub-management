import { createBrowserRouter, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import ErrorBoundary from "./pages/ErrorBoundaryPage";
import DashboardLayout from "./layouts/DashboardLayout";
import BooksPage from "./pages/BooksPage";
import Login from "./pages/Login";
import BookDetailPage from "./pages/BookDetailPage";
import EmployeesPage from "./pages/EmployeesPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => <Navigate to="/dashboard/home" />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "home",
        Component: HomePage,
      },
      {
        path: "books",
        Component: BooksPage,
        children: [
          {
            path: ":id",
            Component: BookDetailPage,
          },
        ],
      },
      {
        path: "employees",
        Component: EmployeesPage,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
