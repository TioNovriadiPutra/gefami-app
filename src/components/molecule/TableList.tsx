import { View } from "react-native";
import React from "react";
import { TableRow } from "@components/atom";

type Props = {
	listData: any[];
};

const TableList = ({ listData }: Props) => {
	return (
		<View>
			{listData.map((item, index) => (
				<TableRow
					key={index.toString()}
					rowData={item}
					type={index % 2 === 0 ? "even" : "odd"}
				/>
			))}
		</View>
	);
};

export default TableList;
