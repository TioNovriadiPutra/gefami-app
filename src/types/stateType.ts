export type EditType = {
	show: boolean;
	id: number;
};

export type ToastType = {
	show: boolean;
	type: "success" | "failed";
	message: string;
};

export type AuthType = {
	username: string;
	password: string;
};
