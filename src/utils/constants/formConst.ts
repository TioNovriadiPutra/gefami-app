import { LoginInput } from "@interfaces/authInterface";
import { LabelInput } from "@interfaces/labelInterface";
import { FormType } from "types/formType";

export const labelForm: FormType<LabelInput> = {
	title: "Edit Label",
	inputs: [
		{
			type: "text",
			name: "labelName",
			placeholder: "Input label name...",
		},
	],
	defaultValues: {
		labelName: undefined,
	},
	label: "Confirm",
};

export const loginForm: FormType<LoginInput> = {
	title: "Login",
	inputs: [
		{
			type: "text",
			name: "username",
			placeholder: "Input username...",
		},
		{
			type: "password",
			name: "password",
			placeholder: "Input password...",
		},
	],
	defaultValues: {
		username: undefined,
		password: undefined,
	},
	label: "Sign In",
};

export const logoutForm: FormType<{}> = {
	title: "Selamat Datang!",
	inputs: [],
	defaultValues: {},
	label: "Sign Out",
};
