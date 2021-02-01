import React, { ReactElement } from "react";

import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { View, Text } from "../styles";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  backHandler: () => void;
  children: string;
}

const NavHeaderDiv = styled(View)`
  height: 60px;
  background-color: #333;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const NavHeaderText = styled(Text)`
  margin-left: 20px;
  font-size: 30px;
`;

export default function NavHeader({
  backHandler,
  children,
}: Props): ReactElement {
  return (
    <NavHeaderDiv>
      <TouchableOpacity onPress={backHandler}>
        <AntDesign name="back" size={28} color="#fefefe" />
      </TouchableOpacity>
      <NavHeaderText>{children}</NavHeaderText>
    </NavHeaderDiv>
  );
}
