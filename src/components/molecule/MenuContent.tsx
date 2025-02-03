import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import React from "react";
import { navbarData } from "@utils/constants/pageConst";
import { MenuButton } from "@components/atom";
import { AppStackParamList } from "types/navigationType";

type Props = {
	onHeight: (e: LayoutChangeEvent) => void;
	onNav: (dest: keyof AppStackParamList) => void;
};

const MenuContent = ({ onHeight, onNav }: Props) => {
	return (
		<View onLayout={onHeight} style={styles.container}>
			{navbarData.map((item, index) => (
				<MenuButton key={index.toString()} buttonData={item} onNav={onNav} />
			))}
		</View>
	);
};

export default MenuContent;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 40,
		paddingVertical: 32,
		alignItems: "center",
		gap: 32,
	},
});
