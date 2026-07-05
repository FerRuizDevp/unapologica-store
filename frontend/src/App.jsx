import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import PageLoader from "./components/PageLoader.jsx";
import Layout from "./components/Layout.jsx";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import CheckoutReturnPage from "./pages/CheckoutReturnPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <PageLoader />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route
          path="/orders"
          element={isSignedIn ? <OrdersPage /> : <Navigate to="/" replace />}
        />
        <Route path="/checkout/return" element={<CheckoutReturnPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
