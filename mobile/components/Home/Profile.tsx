import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { View, H1, TextInput, Button, Text } from "../../styles";

const ProfileDiv = styled(View)`
  flex: 1;
`;

interface Props {}

export default function Profile({}: Props): ReactElement {
  return <ProfileDiv></ProfileDiv>;
}
