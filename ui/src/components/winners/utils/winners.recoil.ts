import { atom } from "recoil";

export const shouldSubmitAtom = atom({
  key: "shouldSubmit",
  default: false,
});

export const fileToUploadAtom = atom({
  key: "fileToUpload",
  default: null as File | null,
});
