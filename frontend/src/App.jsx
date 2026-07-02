import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import PageLoader from "./components/PageLoader.jsx";
import Layout from "./components/Layout.jsx";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <PageLoader />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
