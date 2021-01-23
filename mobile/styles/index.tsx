import styled from "styled-components/native";

export const Text = styled.Text`
  color: ${(props: any) => props.theme.text};
  font-family: "Roboto_400Regular";
`;

export const Button = styled.Button`
  color: ${(props: any) => props.theme.text};
  font-family: "Roboto_400Regular";
`;

export const View = styled.View`
  background-color: ${(props: any) => props.theme.background};
  font-family: "Roboto_400Regular";
`;

export const Center = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  background-color: ${(props: any) => props.theme.text};
  font-family: "Roboto_400Regular";
`;

export const H1 = styled(Text)`
  font-weight: bold;
  font-size: 32;
  font-family: "Roboto_400Regular";
`;
