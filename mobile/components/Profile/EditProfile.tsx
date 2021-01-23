import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components/native";
import { View, H1, TextInput, Button, Text } from "../../styles";

const EditProfileDiv = styled(View)`
  flex: 1;
  padding-top: 80px;
  padding-bottom: 80px;

  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
`;

interface Props {}

export default function EditProfile({}: Props): ReactElement {
  return (
    <EditProfileDiv>
      <ProfileImage source={require("../../assets/base/person.png")} />
    </EditProfileDiv>
  );
}
