import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { View, Text } from "../../styles";

const MessageDiv = styled(View)`
  background-color: #333;
  width: max-content;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 15px;
  border-radius: 5px;
  margin: 10px;
  font-size: 16px;
  max-width: 250px;
  align-self: ${(props: any) => (props.right ? "flex-end" : "flex-start")};
`;

const MessageName = styled(Text)`
  opacity: 0.7;
  font-size: 16px;
  margin-bottom: 2px;
`;

const MessageText = styled(Text)`
  font-size: 16px;
`;

interface Props {
  children: string;
  right?: boolean;
  viewProfileHandler: () => void;
}

export default function Message({
  children,
  right,
  viewProfileHandler,
}: Props): ReactElement {
  return (
    <MessageDiv right={right}>
      <TouchableOpacity onPress={viewProfileHandler}>
        <MessageName>{right ? "You" : "Akhil Kala"}</MessageName>
      </TouchableOpacity>
      <MessageText>{children}</MessageText>
    </MessageDiv>
  );
}
