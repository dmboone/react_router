import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const myRouter = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/products', element: <ProductsPage />},
]);

function App() {
  return <RouterProvider router={myRouter}></RouterProvider>;
}

export default App;
