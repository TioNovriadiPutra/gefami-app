import { AppStackParamList } from "./navigationType";

export type NavbarType = {
	label: string;
	desc: keyof AppStackParamList;
};

export type TableType = {
	headers: TableHeaderType[];
};

export type TableHeaderType = {
	label: string;
	flex: number;
};
