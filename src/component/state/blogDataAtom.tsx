import { atom } from "recoil";

export const blogDataState = atom<any>({
  key: "blogDataState",
  default: [],
});
