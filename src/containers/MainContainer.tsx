import { StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { colors } from "@themes/colors";

type Props = {
	children: ReactNode;
	containerStyles?: ViewStyle;
};

const MainContainer = ({ children, containerStyles }: Props) => {
	return <View style={[styles.container, containerStyles]}>{children}</View>;
};

export default MainContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 43,
		paddingHorizontal: 14,
		backgroundColor: colors["White"],
	},
});
