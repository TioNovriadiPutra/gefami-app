import { atom, selector } from "recoil";
import { ToastType } from "types/stateType";

export const showToastState = atom<boolean>({
	key: "showToastState",
	default: false,
});

export const toastTypeState = atom<"success" | "failed">({
	key: "toastTypeState",
	default: "failed",
});

export const toastMessageState = atom<string>({
	key: "toastMessageState",
	default: "Hello World",
});

export const toastSelector = selector<ToastType>({
	key: "toastSelector",
	get: ({ get }) => {
		const show = get(showToastState);
		const type = get(toastTypeState);
		const message = get(toastMessageState);

		return {
			show,
			type,
			message,
		};
	},
	set: ({ set }, newValue) => {
		const { show, type, message } = newValue as ToastType;

		set(showToastState, show);
		set(toastTypeState, type);
		set(toastMessageState, message);
	},
});
