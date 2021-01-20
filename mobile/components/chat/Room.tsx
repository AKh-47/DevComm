import React, { ReactElement } from "react";
import { TouchableOpacity, ScrollView } from "react-native";

import styled from "styled-components/native";
import { View, H1, TextInput } from "../../styles";
import useInputState from "../../hooks/useInputState";
import Message from "./Message";

const RoomDiv = styled(View)`
  flex: 1;
`;

const RoomBottom = styled(View)`
  height: 50px;
  background-color: #333;
  flex-direction: row;
`;

const RoomTop = styled(View)`
  height: 60px;
  background-color: #333;
  font-size: 35;
  color: #fefefe;
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
  font-size: 1.5rem;
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
  font-size: 24;
  padding-right: 10px;
  padding-left: 10px;
`;

interface Props {}

export default function Room({}: Props): ReactElement {
  const [message, setMessage, resetMessage] = useInputState();

  return (
    <RoomDiv>
      <RoomTop>React</RoomTop>

      <RoomChat>
        <Message>This works da</Message>
        <Message>This also da</Message>
        <Message>This also da</Message>
        <Message>This also da</Message>
        <Message>This also da</Message>
        <Message>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          mollitia, consequuntur sed, ex explicabo assumenda reiciendis autem
          vitae, optio laudantium veniam ipsum unde consequatur dolorem nisi
          error quaerat? Amet, ad?
        </Message>
        <Message right>Hello bitchs</Message>
        <Message>This also da</Message>
        <Message>This also da</Message>
        <Message right>Hello bitchs</Message>
        <Message right>Hello bitchs</Message>
      </RoomChat>

      <RoomBottom>
        <RoomInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={() => {}}>
          <SendButton>Send</SendButton>
        </TouchableOpacity>
      </RoomBottom>
    </RoomDiv>
  );
}
