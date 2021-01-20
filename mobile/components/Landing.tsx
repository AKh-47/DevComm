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
  font-size: 1.25rem;
  font-weight: bold;
  width: 250px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SecondaryButton = styled(View)`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px;
  border-radius: 5px;
  border-color: ${(props: any) => props.theme.text};
  color: ${(props: any) => props.theme.text};
  width: 250px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function Landing(): ReactElement {
  return (
    <LandingDiv>
      <LandingH1>Dev Comm</LandingH1>
      <P>A chat community for developers to connect and collaborate</P>
      <TouchableOpacity onPress={() => {}}>
        <SecondaryButton>Log in</SecondaryButton>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <PrimaryButton>Join the Community</PrimaryButton>
      </TouchableOpacity>
    </LandingDiv>
  );
}
