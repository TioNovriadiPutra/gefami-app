import { JsonDTO } from "@interfaces/jsonInterface";
import { atom } from "recoil";

export const htmlDataState = atom<JsonDTO[]>({
	key: "htmlDataState",
	default: [],
});
