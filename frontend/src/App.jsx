import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import PageLoader from "./components/PageLoader.jsx";
import Layout from "./components/Layout.jsx";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import CheckoutReturnPage from "./pages/CheckoutReturnPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import OrderDetailPage from "./pages/OrderDetailPage.jsx";
import OrderDetailSummaryPage from "./pages/OrderDetailSummaryPage.jsx";
import OrderChatPage from "./pages/OrderChatPage.jsx";
import SentryDemoPage from "./pages/SentryDemoPage.jsx";
import OrderVideoPage from "./pages/OrderVideoPage.jsx";

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

        <Route path="/demo-sentry" element={<SentryDemoPage />} />

        <Route
          path="/orders/:id/call"
          element={
            isSignedIn ? <OrderVideoPage /> : <Navigate to={"/"} replace />
          }
        />

        {/* NESTED ROUTES */}
        <Route path="/orders/:id" element={<OrderDetailPage />}>
          <Route index element={<OrderDetailSummaryPage />} />
          <Route path="chat" element={<OrderChatPage />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
