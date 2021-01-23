import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { View, H1, TextInput, Button, Text } from "../../styles";
import {
  ScrollView,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAuth } from "../../context/AuthContext";

const ProfileDiv = styled(View)`
  flex: 1;
  padding-top: 40px;
  padding-bottom: 80px;

  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;

// const ProfileDiveStyles = StyleSheet.create({
//   center: {
//     alignItems: "center",
//   },
// });

const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
`;

const ProfileName = styled(Text)`
  font-size: 30px;
  margin-top: 20px;
`;

const ProfileBio = styled(Text)`
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  padding-left: 25px;
  padding-right: 25px;
`;

const EditProfile = styled.TouchableOpacity`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 5px;
  font-size: 21px;
  font-weight: bold;
  border: 1px;
  border-radius: 5px;
  border-color: ${(props: any) => props.theme.text};
  color: ${(props: any) => props.theme.text};
  width: 200px;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const ProfileLinks = styled(View)`
  flex-direction: row;
  margin-top: 10px;
`;

const ProfileLink = styled(TouchableOpacity)`
  margin: 20px;
`;

const ProfileLogOut = styled(TouchableOpacity)`
  background-color: ${(props: any) => props.theme.text};
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 5px;
  flex-direction: row;
`;

const ProfileLogOutText = styled(Text)`
  color: orangered;
  align-items: center;
  justify-content: center;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 18px;
  padding-right: 18px;
`;

interface Props {}

export default function Profile({}: Props): ReactElement {
  const auth = useAuth();

  return (
    <ProfileDiv
    // contentContainerStyle={ProfileDiveStyles}
    >
      <ProfileImage source={require("../../assets/base/person.png")} />
      <EditProfile>Edit Profile</EditProfile>
      <ProfileName>Akhil Kala</ProfileName>
      <ProfileBio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum
        est, quae dolorum dignissimos delectus mollitia maxime numquam, saepe
        omnis culpa, in quisquam doloribus tempore corrupti magnam impedit eaque
        tenetur?
      </ProfileBio>
      <ProfileLinks>
        <ProfileLink onPress={() => Linking.openURL("https://google.com")}>
          <AntDesign name="linkedin-square" size={31} color="#fefefe" />
        </ProfileLink>
        <ProfileLink
          onPress={() => Linking.openURL("https://github.com/akh-47")}
        >
          <AntDesign name="github" size={31} color="#fefefe" />
        </ProfileLink>
        <ProfileLink onPress={() => Linking.openURL("https://google.com")}>
          <AntDesign name="instagram" size={31} color="#fefefe" />
        </ProfileLink>
      </ProfileLinks>
      <ProfileLogOut onPress={() => auth?.logout()}>
        <ProfileLogOutText>Log Out</ProfileLogOutText>
      </ProfileLogOut>
    </ProfileDiv>
  );
}
