import { atom } from "recoil";
import { AuthType } from "types/stateType";

export const authInitialState = atom<AuthType | null>({
	key: "authInitialState",
	default: null,
});

export const authState = atom<AuthType | null>({
	key: "authState",
	default: null,
});
