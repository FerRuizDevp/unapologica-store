import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import "./App.css";

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  return (
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
  );
}

export default App;
