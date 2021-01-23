import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { View, H1, Button, Text } from "../../styles";
import { baseURL } from "../../utils/request";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface Props {
  children: string;
  image: string;
  enterhandler: () => void;
}

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
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
`;

const Left = styled(View)`
  background-color: #333;
  flex-direction: row;
  font-size: 28px;
  align-items: center;
`;

const Image = styled.Image`
  width: 40;
  height: 40;
  margin-right: 20px;
`;

export default function HomeCard({
  children,
  image,
  enterhandler,
}: Props): ReactElement {
  return (
    <HomeCardDiv>
      <Left>
        <Image
          // source={require("../../assets/favicon.png")}
          source={{
            uri: `${baseURL}/${image}`,
          }}
        />
        {children}
      </Left>

      <TouchableOpacity onPress={enterhandler}>
        <Ionicons name="enter-outline" size={28} color="#fefefe" />
      </TouchableOpacity>
    </HomeCardDiv>
  );
}
