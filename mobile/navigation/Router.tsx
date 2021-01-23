import React, { ReactElement } from "react";
import Home from "../components/Home/Home";
import { useAuth } from "../context/AuthContext";
import AuthStack from "./AuthStack";

interface Props {}

export default function Router({}: Props): ReactElement {
  const auth = useAuth();

  console.log(auth?.currentUser);

  return (
    <React.Fragment>
      {auth?.currentUser ? <Home /> : <AuthStack />}
    </React.Fragment>
  );
}
