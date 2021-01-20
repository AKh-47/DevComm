import React, { ReactElement, useContext, useState } from "react";
import { User, Nullable } from "../utils/types";

interface Props {
  children: ReactElement;
}

interface Value {}

const SettingsContext = React.createContext<Nullable<Value>>(null);

export function useAuth() {
  return useContext(SettingsContext);
}

export default function SettingsProvider({ children }: Props): ReactElement {
  const value = {};

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
