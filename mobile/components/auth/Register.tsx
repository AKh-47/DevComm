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

export default function Register(): ReactElement {
  const [username, setUsername, resetUsername] = useInputState();
  const [password, setPassword, resetpassword] = useInputState();
  const [confirmPass, setConfirmPass, resetConfirmPass] = useInputState();

  const handleSubmit = () => {};

  return (
    <AuthDiv>
      <AuthTop>
        <AuthH1>Sign Up</AuthH1>
        <P>Join the Community build for passionate Developers</P>
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
        <AuthInput
          onChangeText={setConfirmPass}
          placeholder="Confirm Password"
          value={confirmPass}
          secureTextEntry={true}
        />
        <AuthSwitch>
          <AuthSwitchText>Already have an account? Log in</AuthSwitchText>
        </AuthSwitch>
        <TouchableOpacity onPress={handleSubmit}>
          <AuthButton>Submit</AuthButton>
        </TouchableOpacity>
      </AuthBottom>
    </AuthDiv>
  );
}
