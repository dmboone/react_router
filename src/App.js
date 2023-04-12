import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

const myRouter = createBrowserRouter([
  {path: '/', element: <HomePage />}
]);

function App() {
  return <RouterProvider router={myRouter}></RouterProvider>;
}

export default App;
