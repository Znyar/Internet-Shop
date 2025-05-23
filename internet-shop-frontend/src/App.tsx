import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header/header";
import RootLayout from "./routes/root-layout";
import PublicLayout from "./routes/public-layout";
import AuthPage from "./pages/auth-page/auth-page";
import ShopPage from "./pages/shop-page/shop-page";
import ProfilePage from "./pages/profile-page/profile-page";
import ProtectedLayout from "./routes/protected-layout";
import ProductPage from "./pages/product-page/product-page";
import CartPage from "./pages/cart-page/cart-page";
import FavoritesPage from "./pages/favorites-page/favorites-page";

const publicRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthPage />,
  },
];

const protectedRoutes: RouteObject[] = [
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
];

const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/shop" replace />,
      },
      {
        element: <PublicLayout />,
        children: publicRoutes,
      },
      {
        element: <ProtectedLayout />,
        children: protectedRoutes,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: "/" });

export default function App() {
  return (
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );
}
