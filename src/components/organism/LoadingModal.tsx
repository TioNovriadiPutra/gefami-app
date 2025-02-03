import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { useRecoilValue } from "recoil";
import { isLoadingState } from "@stores/pageStore";

const LoadingModal = () => {
	const isLoading = useRecoilValue(isLoadingState);

	return (
		<Modal transparent visible={isLoading}>
			<View style={styles.modal}>
				<View style={styles.container}>
					<ActivityIndicator size={"large"} color={colors["Main"]} />
				</View>
			</View>
		</Modal>
	);
};

export default LoadingModal;

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: colors["Modal"],
		justifyContent: "center",
		alignItems: "center",
		zIndex: 998,
	},
	container: {
		backgroundColor: colors["White"],
		paddingHorizontal: 20,
		paddingVertical: 20,
		borderRadius: 20,
	},
});
