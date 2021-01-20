import React from "react";
import Theme from "./Theme";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Landing from "./components/Landing";
import Home from "./components/Home/Home";
import Room from "./components/chat/Room";
import AuthProvider from "./context/AuthContext";

export default function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <Theme>
          {/* <Login /> */}
          {/* <Register /> */}
          {/* <Landing /> */}
          <Home />
          {/* <Room /> */}
        </Theme>
      </AuthProvider>
    </React.Fragment>
  );
}
