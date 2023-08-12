import { useState } from "react";
import FirebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";

// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  FirebaseAuthService.subscribeToAuthChanges(setUser);

  return (
    <div className="App">
      <dev className="title-row">
        <h1 className="title">Firebase Recipes Project</h1>
        <LoginForm existingUser={user}></LoginForm>
      </dev>
    </div>
  );
}

export default App;
