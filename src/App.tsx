import React, { useEffect } from "react";
import "./App.css";
import { Home, ShortListUser } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getUsers } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shortlist",
    element: <ShortListUser />,
  },
]);

function App() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
