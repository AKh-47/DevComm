import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { View, H1, TextInput, Button, Text } from "../../styles";

interface Props {}

const HomeCardDiv = styled(View)`
  background-color: #333;
  border-radius: 5px;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  color: ${(props: any) => props.theme.text};
  flex-direction: row;
  align-items: center;
  font-size: 32;
  padding: 10px;
`;

export default function HomeCard({}: Props): ReactElement {
  return <HomeCardDiv>React</HomeCardDiv>;
}
