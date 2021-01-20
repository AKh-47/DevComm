import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components/native";
import { View, H1, TextInput, Button, Text } from "../../styles";

import HomeList from "./HomeList";
import Profile from "./Profile";

const HomeDiv = styled(View)`
  flex: 1;
`;

const HomeBottom = styled(View)`
  background-color: #ccc;
  height: 60px;
  flex-direction: row;
  color: #fefefe;
`;

const NavButton = styled(View)`
  flex: 1;
`;

export default function Home(): ReactElement {
  return (
    <HomeDiv>
      <HomeList />
      {/* <Profile /> */}
      <HomeBottom>
        <NavButton>Chat</NavButton>
        <NavButton>Profile</NavButton>
      </HomeBottom>
    </HomeDiv>
  );
}
