import { Suspense, lazy } from "react";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Account = lazy(() => import("./pages/Account"));
const Bookings = lazy(() => import("./pages/Bookings"));
const Cabins = lazy(() => import("./pages/Cabins"));
const Login = lazy(() => import("./pages/Login"));
const Settings = lazy(() => import("./pages/Settings"));
const Users = lazy(() => import("./pages/Users"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import GlobaStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Spinner from "./ui/Spinner";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "account", element: <Account /> },
      { path: "bookings", element: <Bookings /> },
      { path: "cabins", element: <Cabins /> },
      { path: "settings", element: <Settings /> },
      { path: "users", element: <Users /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  { path: "login", element: <Login /> },
]);

function App() {
  return (
    <>
      <GlobaStyles />
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
