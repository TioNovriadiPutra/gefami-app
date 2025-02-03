import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

type Props = {
	label: string;
	containerStyles?: ViewStyle;
	onPress?: () => void;
};

const CustomButton = ({ label, containerStyles, onPress }: Props) => {
	return (
		<TouchableOpacity
			style={[styles.container, containerStyles]}
			onPress={onPress}
		>
			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors["Main"],
		alignItems: "center",
		paddingVertical: 6,
		borderRadius: 10,
		paddingHorizontal: 14,
	},
	label: {
		fontFamily: "SemiBold",
		fontSize: 16,
		color: colors["White"],
	},
});
