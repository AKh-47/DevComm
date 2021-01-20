import React, { ReactElement } from "react";
import styled from "styled-components/native";

import { ScrollView } from "react-native";
import { View, H1, TextInput, Button, Text } from "../../styles";

import HomeCard from "./HomeCard";

const HomeTop = styled(View)`
  background-color: #fff;
  height: 50px;
  margin: 20px;
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: #fefefe;
`;

const HomeListDiv = styled(ScrollView)`
  flex: 1;
`;

const SearchBar = styled(TextInput)`
  background-color: #333;
  height: 100%;
  flex: 1;
  color: #fefefe;
  font-size: 1.5rem;
  padding: 5px;
`;

interface Props {}

export default function HomeList({}: Props): ReactElement {
  return (
    <React.Fragment>
      <HomeTop>
        {/* <FontAwesome.Button
          name="search"
          size={32}
          color="#fefefe"
          backgroundColor="#333"
        /> */}
        <SearchBar placeholder="Search" />
      </HomeTop>

      <HomeListDiv>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
      </HomeListDiv>
    </React.Fragment>
  );
}
