import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { View, H1, TextInput, Button, Text } from "../styles";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  profileSwitchhandler?: () => void;
  listSwitchhandler?: () => void;
}

const HomeBottom = styled(View)`
  background-color: #ccc;
  height: 60px;
  flex-direction: row;
  color: #fefefe;
`;

const NavButton = styled(TouchableOpacity)`
  flex: 1;
  background-color: #212121;
  justify-content: center;
  align-items: center;
`;

export default function BottomNav({
  profileSwitchhandler,
  listSwitchhandler,
}: Props): ReactElement {
  return (
    <HomeBottom>
      <NavButton onPress={listSwitchhandler}>
        <AntDesign name="message1" size={24} color="#fefefe" />
      </NavButton>
      <NavButton onPress={profileSwitchhandler}>
        <AntDesign name="user" size={24} color="#fefefe" />
      </NavButton>
    </HomeBottom>
  );
}
