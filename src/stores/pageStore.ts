import { atom, selector } from "recoil";
import { EditType } from "types/stateType";

export const isLoadingState = atom<boolean>({
	key: "isLoadingState",
	default: false,
});

export const showMenuState = atom<boolean>({
	key: "showMenuState",
	default: false,
});

export const showEditState = atom<boolean>({
	key: "showEditState",
	default: false,
});

export const editIdState = atom<number>({
	key: "editIdState",
	default: 0,
});

export const editSelector = selector<EditType>({
	key: "editSelector",
	get: ({ get }) => {
		const show = get(showEditState);
		const id = get(editIdState);

		return {
			show,
			id,
		};
	},
	set: ({ set }, newValue) => {
		const { show, id } = newValue as EditType;

		set(showEditState, show);
		set(editIdState, id);
	},
});
