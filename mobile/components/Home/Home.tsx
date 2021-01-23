import React, { useState, useEffect, ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { View, H1, TextInput, Button, Text } from "../../styles";
import { AntDesign } from "@expo/vector-icons";

import HomeList from "./HomeList";
import Profile from "../Profile/Profile";
import HomeListStack from "../../navigation/HomeListStack";

const HomeDiv = styled(View)`
  flex: 1;
`;

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

export default function Home(): ReactElement {
  const [profileActive, setProileActive] = useState(false);

  const [navActive, setNavActive] = useState(true);

  const activateNav = () => setNavActive(true);
  const deactivateNav = () => setNavActive(false);

  return (
    <HomeDiv>
      {profileActive ? <Profile /> : <HomeListStack />}
      {navActive && (
        <HomeBottom>
          <NavButton onPress={() => setProileActive(false)}>
            <AntDesign name="message1" size={24} color="#fefefe" />
          </NavButton>
          <NavButton onPress={() => setProileActive(true)}>
            <AntDesign name="user" size={24} color="#fefefe" />
          </NavButton>
        </HomeBottom>
      )}
    </HomeDiv>
  );
}
