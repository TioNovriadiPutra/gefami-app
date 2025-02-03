export type FormType<T> = {
	title: string;
	inputs: InputType[];
	defaultValues: T;
	label: string;
};

export type InputType = {
	type: "text" | "password" | "number";
	name: string;
	placeholder: string;
};
