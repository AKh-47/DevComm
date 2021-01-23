import React, { ReactElement, useState } from "react";
import { TouchableOpacity } from "react-native";
import useInputState from "../../hooks/useInputState";
import { Text } from "../../styles";

import {
  AuthInput,
  AuthButton,
  AuthSwitch,
  AuthSwitchText,
  AuthDiv,
  AuthH1,
  AuthTop,
  AuthBottom,
  AuthButtonText,
  P,
} from "./Auth.styles";

export default function Register({ navigation }: any): ReactElement {
  const [username, setUsername, resetUsername] = useInputState();
  const [password, setPassword, resetpassword] = useInputState();
  const [confirmPass, setConfirmPass, resetConfirmPass] = useInputState();

  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!username || !password || !(password === confirmPass)) {
      setError(true);
    }
  };

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
          <AuthSwitchText>
            Already have an account?
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => navigation.navigate("Login")}
            >
              <AuthSwitchText>Log in</AuthSwitchText>
            </TouchableOpacity>
          </AuthSwitchText>
        </AuthSwitch>
        <TouchableOpacity disabled={error} onPress={handleSubmit}>
          <AuthButton disabled={error}>
            <AuthButtonText>Submit</AuthButtonText>
          </AuthButton>
        </TouchableOpacity>
      </AuthBottom>
    </AuthDiv>
  );
}
