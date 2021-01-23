import React, { ReactElement } from "react";
import { Center, Text } from "../styles";
import styled from "styled-components/native";

const LoadingText = styled(Text)``;

export default function Loading(): ReactElement {
  return (
    <Center>
      <LoadingText>Loading...</LoadingText>
    </Center>
  );
}
