import React, { ReactElement, useContext, useState, useEffect } from "react";
import { POST } from "../utils/request";
import { User, Nullable } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  children: ReactElement;
}

interface Value {
  currentUser: Nullable<User>;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  isCurrentUser: (userID: string) => boolean;
}

const AuthContext = React.createContext<Nullable<Value>>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: Props): ReactElement {
  const [currentUser, setCurrentUser] = useState<Nullable<User>>(null);

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("user");

      if (user) {
        setCurrentUser(JSON.parse(user));
      } else {
        setCurrentUser(null);
      }
    })();
  }, []);

  const register = async (username: string, password: string) => {};

  const isCurrentUser = (userID: string) => {
    return currentUser?._id === userID;
  };

  const login = async (username: string, password: string) => {
    const { user, error } = await POST("/auth/login", {
      username,
      password,
    });

    if (!error) {
      setCurrentUser(user._doc);
      await AsyncStorage.setItem("user", JSON.stringify(user._doc));
      return null;
    } else {
      return error;
    }
  };

  const logout = async () => {
    setCurrentUser(null);
    await AsyncStorage.removeItem("user");
  };

  const value = {
    currentUser,
    register,
    login,
    logout,
    isCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
