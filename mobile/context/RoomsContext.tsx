import React, { ReactElement, useContext, useState, useEffect } from "react";
import { Room, Nullable } from "../utils/types";
import socket from "../utils/socket";
import { useAuth } from "./AuthContext";

interface Props {
  children: ReactElement;
}

interface Value {
  joinRoom: (roomID: string) => void;
  leaveRoom: (roomID: string) => void;
  sendMessage: (roomID: string, message: string) => void;
}

interface IUserLink {
  message: string;
  _id: string;
}

const RoomsContext = React.createContext<Nullable<Value>>(null);

export function useRooms() {
  return useContext(RoomsContext);
}

export default function RoomsProvider({ children }: Props): ReactElement {
  const auth = useAuth();

  useEffect(() => {
    socket.on("recive-message", (user: IUserLink, message: string) => {});
  }, []);

  const joinRoom = (roomID: string) => {
    socket.emit("join-room", roomID);
  };

  const leaveRoom = (roomID: string) => {
    socket.emit("leave-room", roomID);
  };

  const sendMessage = (roomID: string, message: string) => {
    socket.emit("send-message", roomID, auth?.currentUser, message);
  };

  const value = {
    joinRoom,
    leaveRoom,
    sendMessage,
  };

  return (
    <RoomsContext.Provider value={value}>{children}</RoomsContext.Provider>
  );
}
