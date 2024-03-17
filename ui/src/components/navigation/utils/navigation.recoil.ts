import { atom } from "recoil";

export const currentActivePageAtom = atom({
  key: "currentActivePage",
  default: 0,
});

export const isAdminAtom = atom({
  key: "isAdmin",
  default: true,
});

export const shouldRefetchAtom = atom({
  key: "shouldRefetch",
  default: false,
});
