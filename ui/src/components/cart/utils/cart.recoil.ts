import { atom } from "recoil";
import { CartItemProps } from "./types";

export const cartItemsAtom = atom({
  key: "cartItems",
  default: [] as unknown as CartItemProps[],
});
