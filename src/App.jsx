import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cuban, English, German, HomeLayout, Landing } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "english",
        element: <English />,
      },
      {
        path: "german",
        element: <German />,
      },
      {
        path: "spanish",
        element: <Cuban />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
