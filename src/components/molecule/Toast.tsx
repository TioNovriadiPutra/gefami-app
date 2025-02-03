import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import useToast from "@hooks/useToast";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";
import Animated from "react-native-reanimated";

const Toast = () => {
	const { toast, toastAnimatedStyle } = useToast();

	if (!toast.show) return null;

	return (
		<Animated.View
			style={[
				styles.container,
				{
					backgroundColor:
						toast.type === "success" ? colors["Success"] : colors["Error"],
				},
				toastAnimatedStyle,
			]}
		>
			<Image
				source={
					toast.type === "success"
						? require("@assets/images/success.png")
						: require("@assets/images/error.png")
				}
				style={icons["IconMD"]}
			/>

			<Text style={styles.message}>{toast.message}</Text>
		</Animated.View>
	);
};

export default Toast;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		zIndex: 10,
		left: 32,
		right: 32,
		bottom: 40,
		paddingHorizontal: 15,
		paddingVertical: 12,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 12,
		gap: 18,
	},
	message: {
		flex: 1,
		fontFamily: "SemiBold",
		fontSize: 14,
		color: colors["Shadow"],
	},
});
