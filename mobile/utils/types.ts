export type Nullable<T> = T | null | undefined;

export interface User {
  _id: string;
  username: string;
  bio?: string;
  linkedin?: string;
  instagram?: string;
  github: string;
}
