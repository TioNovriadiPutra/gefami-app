import { StyleSheet, View } from "react-native";
import React from "react";
import CustomButton from "@components/atom/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "types/navigationType";

type Props = {
	onGenerate: () => void;
};

const HTMLFunction = ({ onGenerate }: Props) => {
	const nav = useNavigation<AppNavigationProp>();

	const onHandleView = () => {
		nav.navigate("SecondWebView");
	};

	return (
		<View style={styles.container}>
			<CustomButton
				label="Generate HTML"
				onPress={onGenerate}
				containerStyles={styles.button}
			/>

			<CustomButton
				label="View HTML"
				containerStyles={styles.button}
				onPress={onHandleView}
			/>
		</View>
	);
};

export default HTMLFunction;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		gap: 24,
	},
	button: {
		flex: 1,
	},
});
