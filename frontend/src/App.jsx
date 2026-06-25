import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import PageLoader from "./components/PageLoader.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return <PageLoader />;

  return (
    <Layout>
      <header>
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" />
          </>
        ) : (
          <UserButton />
        )}
      </header>
    </Layout>
  );
}

export default App;
