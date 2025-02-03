import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons } from "@themes/sizing";

type Props = {
	onClose?: () => void;
};

const MenuHeader = ({ onClose }: Props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={icons["IconMD"]} onPress={onClose} />
		</View>
	);
};

export default MenuHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 14,
		paddingVertical: 11,
	},
});
