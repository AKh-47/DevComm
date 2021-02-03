import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components/native";

import { ScrollView } from "react-native";
import { View, H1, TextInput, Button, Text } from "../../styles";
import { Feather } from "@expo/vector-icons";

import HomeCard from "./HomeCard";
import { GET } from "../../utils/request";
import Loading from "../Loading";
import BottomNav from "../BottomNav";
import { useRooms } from "../../context/RoomsContext";

const HomeTop = styled(View)`
  background-color: #fff;
  height: 70px;
  padding: 20px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #fefefe;
  background-color: ${(props: any) => props.theme.background};
`;

const HomeListDiv = styled(ScrollView)`
  flex: 1;
  background-color: ${(props: any) => props.theme.background}; ;
`;

const SearchBar = styled(TextInput)`
  background-color: ${(props: any) => props.theme.background};
  height: 100%;
  flex: 1;
  color: #fefefe;
  font-size: 25px;
  padding: 10px;
`;

const SearchIcon = styled(View)`
  background-color: ${(props: any) => props.theme.background};
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

interface Props {
  navigation: any;
}

export default function HomeList({ navigation }: Props): ReactElement {
  const [rooms, setRooms] = useState([]);

  const [loading, setLoading] = useState(true);

  const room = useRooms();

  useEffect(() => {
    const getRooms = async () => {
      const data = await GET("/rooms");
      setRooms(data);
      setLoading(false);
    };

    getRooms();
  }, []);

  const enterhandler = (roomID: string) => {
    room?.joinRoom(roomID);
    navigation.navigate("Room", { roomID });
  };

  const profileSwitchhandler = () => {
    navigation.navigate("Profile", { currentUser: true });
  };

  if (loading) return <Loading />;
  return (
    <React.Fragment>
      <HomeTop>
        <SearchIcon>
          <Feather name="search" size={24} color="#fefefe" />
        </SearchIcon>
        <SearchBar placeholder="Search" />
      </HomeTop>

      <HomeListDiv>
        {rooms.map((room: any) => (
          <HomeCard
            enterhandler={() => enterhandler("react")}
            image={room.image}
          >
            {room.name}
          </HomeCard>
        ))}
      </HomeListDiv>
      <BottomNav profileSwitchhandler={profileSwitchhandler} />
    </React.Fragment>
  );
}
