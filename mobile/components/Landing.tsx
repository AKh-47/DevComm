import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { View, H1, TextInput, Text } from "../styles";

const LandingDiv = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LandingH1 = styled(H1)`
  font-size: 50;
`;

const P = styled(Text)`
  opacity: 0.7;
  font-size: 22;
  padding: 20px;
  text-align: center;
`;

const PrimaryButton = styled(View)`
  background-color: ${(props: any) => props.theme.text};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 5px;
  width: 250px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PrimaryButtonText = styled(Text)`
  font-size: 21px;
  font-weight: bold;
  color: ${(props: any) => props.theme.background};
`;

const SecondaryButton = styled(View)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 5px;
  border: 1px;
  border-radius: 5px;
  border-color: ${(props: any) => props.theme.text};
  color: ${(props: any) => props.theme.text};
  width: 250px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SecondaryButtonText = styled(Text)`
  font-size: 21px;
  font-weight: bold;
`;

export default function Landing({ navigation }: any): ReactElement {
  return (
    <LandingDiv>
      <LandingH1>Dev Comm</LandingH1>
      <P>A chat community for developers to connect and collaborate</P>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <SecondaryButton>
          <SecondaryButtonText>Log in</SecondaryButtonText>
        </SecondaryButton>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <PrimaryButton>
          <PrimaryButtonText>Join the Community</PrimaryButtonText>
        </PrimaryButton>
      </TouchableOpacity>
    </LandingDiv>
  );
}
