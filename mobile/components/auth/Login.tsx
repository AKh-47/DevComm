import React, { ReactElement, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";
import useInputState from "../../hooks/useInputState";
import { View } from "../../styles";

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
  Error,
  AuthButtonText,
} from "./Auth.styles";

export default function Login({ navigation }: any): ReactElement {
  const [username, setUsername, resetUsername] = useInputState();
  const [password, setPassword, resetpassword] = useInputState();

  const [error, setError] = useState("");

  const auth = useAuth();

  const handleSubmit = async () => {
    const error = await auth?.login(username, password);

    if (error) {
      setError("Auth Failed");
    }
  };

  return (
    <AuthDiv>
      <AuthTop>
        <AuthH1>Log in</AuthH1>
        <P>Login to your account to access the community</P>
      </AuthTop>
      {error && <Error>Auth Failed</Error>}
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
          <AuthSwitchText>
            Don't have an account?
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => navigation.navigate("Register")}
            >
              <AuthSwitchText>Register</AuthSwitchText>
            </TouchableOpacity>
          </AuthSwitchText>
        </AuthSwitch>
        <TouchableOpacity disabled={false} onPress={handleSubmit}>
          <AuthButton disabled={false}>
            <AuthButtonText>Submit</AuthButtonText>
          </AuthButton>
        </TouchableOpacity>
      </AuthBottom>
    </AuthDiv>
  );
}
