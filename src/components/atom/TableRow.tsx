import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import { useSetRecoilState } from "recoil";
import { editSelector } from "@stores/pageStore";

type Props = {
	rowData: any;
	type: "odd" | "even";
};

const TableRow = ({ rowData, type }: Props) => {
	const setEdit = useSetRecoilState(editSelector);

	const onHandleEdit = () => {
		setEdit({ show: true, id: rowData.id });
	};

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor:
						type === "odd" ? colors["Neutral50"] : colors["White"],
				},
			]}
		>
			{rowData.row.map(
				(item: { label: string; flex: number }, index: number) => (
					<Text
						key={index.toString()}
						style={[styles.label, { flex: item.flex }]}
					>
						{item.label}
					</Text>
				)
			)}

			{rowData.action && (
				<TouchableOpacity style={styles.button} onPress={onHandleEdit}>
					<Image
						source={require("@assets/images/edit.png")}
						style={icons["IconMD"]}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default TableRow;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 13,
		paddingVertical: 14,
	},
	label: {
		fontFamily: "Regular",
		fontSize: 14,
		color: colors["Shadow"],
	},
	button: {
		flex: 1,
		alignItems: "center",
	},
});
