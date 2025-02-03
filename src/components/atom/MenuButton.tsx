import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NavbarType } from "types/pageType";
import { colors } from "@themes/colors";
import { AppStackParamList } from "types/navigationType";

type Props = {
	buttonData: NavbarType;
	onNav: (dest: keyof AppStackParamList) => void;
};

const MenuButton = ({ buttonData, onNav }: Props) => {
	return (
		<TouchableOpacity onPress={() => onNav(buttonData.desc)}>
			<Text style={styles.label}>{buttonData.label}</Text>
		</TouchableOpacity>
	);
};

export default MenuButton;

const styles = StyleSheet.create({
	label: {
		textAlign: "center",
		fontFamily: "SemiBold",
		fontSize: 16,
		lineHeight: 21.82,
		color: colors["Neutral600"],
	},
});
