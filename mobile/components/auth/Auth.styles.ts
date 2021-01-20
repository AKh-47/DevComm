import styled from "styled-components/native";
import { View, H1, TextInput, Button, Text } from "../../styles";

export const AuthInput = styled(TextInput)`
  background-color: ${(props: any) => props.theme.background};
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 10px;
  color: ${(props: any) => props.theme.text};
  font-size: 22;
  border-top-left-radius: 15px;
`;

export const AuthButton = styled(View)`
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(props: any) => props.theme.text};
  font-size: 22;
  text-align: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AuthSwitch = styled(View)`
  flex: 1;
  background-color: inherit;
  align-items: center;
  justify-content: flex-end;
`;

export const AuthSwitchText = styled(Text)`
  color: ${(props: any) => props.theme.background};
  font-size: 18;
`;

export const AuthDiv = styled(View)`
  flex: 1;
`;

export const AuthTop = styled(View)`
  padding: 30px;
  flex: 1;
`;

export const AuthBottom = styled(View)`
  flex: 2;
  background-color: ${(props: any) => props.theme.text};
  border-top-left-radius: 75px;
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
`;

export const AuthH1 = styled(H1)`
  font-size: 60;
`;

export const P = styled(Text)`
  opacity: 0.7;
  margin-top: 25px;
  font-size: 22;
`;
