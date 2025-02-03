import { View } from "react-native";
import React from "react";
import { TableHeader, TableList } from "@components/molecule";
import { TableType } from "types/pageType";

type Props = {
	tableData: TableType;
	contentData: any[];
};

const AppTable = ({ tableData, contentData }: Props) => {
	return (
		<View>
			<TableHeader headerData={tableData.headers} />

			<TableList listData={contentData} />
		</View>
	);
};

export default AppTable;
