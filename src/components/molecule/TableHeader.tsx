import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TableHeaderType } from "types/pageType";
import { colors } from "@themes/colors";

type Props = {
	headerData: TableHeaderType[];
};

const TableHeader = ({ headerData }: Props) => {
	return (
		<View style={styles.container}>
			{headerData.map((item, index) => (
				<Text
					key={index.toString()}
					style={[
						styles.label,
						{
							flex: item.flex,
							textAlign: item.label === "Action" ? "center" : "auto",
						},
					]}
				>
					{item.label}
				</Text>
			))}
		</View>
	);
};

export default TableHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingHorizontal: 13,
		paddingBottom: 6,
		borderBottomWidth: 2,
		borderBottomColor: colors["Border"],
	},
	label: {
		fontFamily: "SemiBold",
		fontSize: 14,
		color: colors["Shadow"],
	},
});
