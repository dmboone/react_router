import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// Alternative way of defining routes
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}></Route>
//     <Route path="/products" element={<ProductsPage />}></Route>
//   </Route>
// );

// const myRouter = createBrowserRouter(routeDefinitions);

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // index is like same as path: ''
      { path: "products", element: <ProductsPage />},
      { path: "products/:productId", element: <ProductDetailPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={myRouter}></RouterProvider>;
}

export default App;
