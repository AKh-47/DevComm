import React, { ReactElement, useEffect, useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";

import styled from "styled-components/native";
import { View, H1, TextInput, Text } from "../../styles";
import useInputState from "../../hooks/useInputState";
import Message from "./Message";
import { AntDesign } from "@expo/vector-icons";
import Loading from "../Loading";
import { Nullable, Room as IRoom, UserData } from "../../utils/types";
import { GET } from "../../utils/request";
import { useRooms } from "../../context/RoomsContext";
import { useAuth } from "../../context/AuthContext";

import socket from "../../utils/socket";

const RoomDiv = styled(View)`
  flex: 1;
`;

const RoomTopText = styled(Text)`
  margin-left: 20px;
  font-size: 30px;
`;

const RoomBottom = styled(View)`
  height: 50px;
  background-color: #333;
  flex-direction: row;
`;

const RoomTop = styled(View)`
  height: 60px;
  background-color: #333;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const RoomChat = styled(ScrollView)`
  background-color: #222;
  flex: 1;
  /* padding-top: 20px; */
`;

const RoomInput = styled(TextInput)`
  height: 100%;
  font-size: 25px;
  padding: 15px;
  flex: 2;
  width: 100%;
  border-radius: 500px;
`;

const SendButton = styled(View)`
  background-color: #333;
  flex: 1;
  color: #fefefe;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding-right: 10px;
  padding-left: 10px;
`;

interface Props {
  navigation: any;
  route: any;
}

export default function Room({ navigation, route }: Props): ReactElement {
  const [message, setMessage, resetMessage] = useInputState();

  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState<Nullable<IRoom>>(null);

  const roomsContext = useRooms();
  const auth = useAuth();

  useEffect(() => {
    socket.on("recive-message", (room: IRoom) => {
      setRoom(room);
      console.log("lol");
    });

    return socket.removeAllListeners;
  }, []);

  const viewProfileHandler = () => {
    navigation.navigate("Profile", { currentUser: false });
  };

  useEffect(() => {
    const roomID = route.params.roomID;

    GET(`/rooms/${roomID}`)
      .then((room) => {
        setRoom(room);
        setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
      });
  }, []);

  const goBackHandler = () => {
    if (!room) return;
    navigation.goBack();
    roomsContext?.leaveRoom(room?._id);
  };

  const sendMessageHandler = () => {
    if (!message || !room) return;
    roomsContext?.sendMessage(room?._id, message);
    resetMessage();
  };

  if (loading) return <Loading />;
  return (
    <RoomDiv>
      {/* <NavHeader backHandler={navigation.goBack}>React</NavHeader> */}
      <RoomTop>
        <TouchableOpacity onPress={goBackHandler}>
          <AntDesign name="back" size={28} color="#fefefe" />
        </TouchableOpacity>
        <RoomTopText>{room?.name}</RoomTopText>
      </RoomTop>

      <RoomChat>
        {room?.messages.map((message) => (
          <Message
            // right={message.user._id === auth?.currentUser?._id}
            viewProfileHandler={viewProfileHandler}
          >
            {message.message}
          </Message>
        ))}
      </RoomChat>

      <RoomBottom>
        <RoomInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={sendMessageHandler}>
          <SendButton>Send</SendButton>
        </TouchableOpacity>
      </RoomBottom>
    </RoomDiv>
  );
}
