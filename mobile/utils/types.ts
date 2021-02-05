export type Nullable<T> = T | null | undefined;

type Message = {
  message: string;
  user: UserData;
};

export type UserData = {
  _id: string;
  username: string;
};

export type Room = {
  _id: string;
  name: string;
  image: string;
  messages: Message[];
};

export interface User {
  _id: string;
  username: string;
  bio?: string;
  linkedin?: string;
  instagram?: string;
  github: string;
}
