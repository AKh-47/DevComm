import React, { ReactElement } from "react";
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
  font-size: 16;
  max-width: 250px;
  align-self: ${(props: any) => (props.right ? "flex-end" : "flex-start")};
`;

const MessageName = styled(Text)`
  opacity: 0.7;
  font-size: 16;
  margin-bottom: 2px;
`;

const MessageText = styled(Text)`
  font-size: 16;
`;

interface Props {
  children: string;
  right?: boolean;
}

export default function Message({ children, right }: Props): ReactElement {
  return (
    <MessageDiv right={right}>
      <MessageName>{right ? "You" : "Akhil Kala"}</MessageName>
      <MessageText>{children}</MessageText>
    </MessageDiv>
  );
}
