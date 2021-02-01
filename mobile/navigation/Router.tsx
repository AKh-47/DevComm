import React, { ReactElement } from "react";
import { useAuth } from "../context/AuthContext";
import { Stretch } from "../styles";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

interface Props {}

export default function Router({}: Props): ReactElement {
  const auth = useAuth();

  console.log(auth?.currentUser);

  return (
    <React.Fragment>
      <Stretch>{auth?.currentUser ? <HomeStack /> : <AuthStack />}</Stretch>
    </React.Fragment>
  );
}
