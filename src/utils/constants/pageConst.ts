import { NavbarType, TableType } from "types/pageType";

export const navbarData: NavbarType[] = [
	{
		label: "Number 1 - 2",
		desc: "First",
	},
	{
		label: "Number 3 - 6",
		desc: "Second",
	},
	{
		label: "Number 7 - 8",
		desc: "Third",
	},
	{
		label: "Number 9 - 11",
		desc: "Fourth",
	},
];

export const firstTable: TableType = {
	headers: [
		{
			label: "No.",
			flex: 1,
		},
		{
			label: "Label",
			flex: 2,
		},
		{
			label: "Action",
			flex: 1,
		},
	],
};
