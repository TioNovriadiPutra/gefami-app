import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoute from "@routes/AppRoute";
import usePrepare from "@hooks/usePrepare";
import { StatusBar } from "expo-status-bar";
import { Navbar, Toast } from "@components/molecule";
import { EditModal, LoadingModal, MenuModal } from "@components/organism";

const AppNav = () => {
	const { appReady, navigationRef, fontsLoaded } = usePrepare();

	if (!fontsLoaded || !appReady) return null;

	return (
		<View style={styles.container}>
			<StatusBar translucent={false} style="light" />

			<MenuModal navigationRef={navigationRef} />
			<EditModal />
			<LoadingModal />

			<Navbar />

			<NavigationContainer ref={navigationRef}>
				<AppRoute />
				<Toast />
			</NavigationContainer>
		</View>
	);
};

export default AppNav;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
