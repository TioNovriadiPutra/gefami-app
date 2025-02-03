import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import CustomButton from "@components/atom/CustomButton";
import useRandomController from "@controllers/randomController";
import { HTMLDelete, HTMLFunction } from "@components/molecule";

const Second = () => {
	const { getRandomJsonService, generateHTMLService } = useRandomController();

	return (
		<MainContainer containerStyles={styles.container}>
			<CustomButton label="Fetch JSON Data" onPress={getRandomJsonService} />

			<HTMLFunction onGenerate={generateHTMLService} />

			<HTMLDelete />
		</MainContainer>
	);
};

export default Second;

const styles = StyleSheet.create({
	container: {
		gap: 32,
	},
});
