import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import useInputState from "../../hooks/useInputState";

import {
  AuthInput,
  AuthButton,
  AuthSwitch,
  AuthSwitchText,
  AuthDiv,
  AuthH1,
  AuthTop,
  AuthBottom,
  P,
} from "./Auth.styles";

export default function Login(): ReactElement {
  const [username, setUsername, resetUsername] = useInputState();
  const [password, setPassword, resetpassword] = useInputState();

  const handleSubmit = () => {};

  return (
    <AuthDiv>
      <AuthTop>
        <AuthH1>Log in</AuthH1>
        <P>Login to your account to access the community</P>
      </AuthTop>
      <AuthBottom>
        <AuthInput
          onChangeText={setUsername}
          placeholder="Username"
          value={username}
        />
        <AuthInput
          onChangeText={setPassword}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
        />
        <AuthSwitch>
          <AuthSwitchText>Don't have an account? Register</AuthSwitchText>
        </AuthSwitch>
        <TouchableOpacity onPress={handleSubmit}>
          <AuthButton>Submit</AuthButton>
        </TouchableOpacity>
      </AuthBottom>
    </AuthDiv>
  );
}
