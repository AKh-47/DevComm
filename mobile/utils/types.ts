export type Nullable<T> = T | null | undefined;

export type Room = string;

export interface User {
  _id: string;
  username: string;
  bio?: string;
  linkedin?: string;
  instagram?: string;
  github: string;
}
