import React, { ReactElement, useContext } from "react";
import { User, Nullable } from "../utils/types";

interface Props {
  children: ReactElement;
}

interface Value {}

const RoomsContext = React.createContext<Nullable<Value>>(null);

export function useRooms() {
  return useContext(RoomsContext);
}

export default function RoomsProvider({ children }: Props): ReactElement {
  const value = {};

  return (
    <RoomsContext.Provider value={value}>{children}</RoomsContext.Provider>
  );
}
