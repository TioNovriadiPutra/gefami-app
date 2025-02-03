import { StyleSheet, View } from "react-native";
import React from "react";
import { HamburgerButton } from "@components/atom";
import { colors } from "@themes/colors";

const Navbar = () => {
	return (
		<View style={styles.container}>
			<HamburgerButton />
		</View>
	);
};

export default Navbar;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 11,
		paddingHorizontal: 14,
		backgroundColor: colors["White"],
		shadowColor: colors["Shadow"],
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.15,
		shadowRadius: 12,
		elevation: 5,
	},
});
