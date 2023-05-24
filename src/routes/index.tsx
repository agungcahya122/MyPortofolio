import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/App"
import Detail from "../pages/Detail";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/detail/:id",
      element: <Detail />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}
export default App