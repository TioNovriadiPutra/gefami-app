import { createNavigationContainerRef } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AppStackParamList } from "types/navigationType";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";

const usePrepare = () => {
	const [appReady, setAppReady] = useState(false);

	const navigationRef = createNavigationContainerRef<AppStackParamList>();

	const [fontsLoaded] = useFonts({
		Bold: require("@assets/fonts/NunitoSans_7pt-Bold.ttf"),
		SemiBold: require("@assets/fonts/NunitoSans_7pt-SemiBold.ttf"),
		Medium: require("@assets/fonts/NunitoSans_7pt-Medium.ttf"),
		Regular: require("@assets/fonts/NunitoSans_7pt-Regular.ttf"),
	});

	const initialData = async () => {
		const filePath = FileSystem.documentDirectory + "data.json";

		await FileSystem.writeAsStringAsync(
			filePath,
			JSON.stringify({
				data: [
					{
						id: 1,
						row: [
							{
								label: "1",
								flex: 1,
							},
							{
								label: "Jakarta",
								flex: 2,
							},
						],
						action: ["edit"],
					},
					{
						id: 2,
						row: [
							{
								label: "2",
								flex: 1,
							},
							{
								label: "Pekanbaru",
								flex: 2,
							},
						],
						action: ["edit"],
					},
				],
			})
		);

		setAppReady(true);
	};

	useEffect(() => {
		initialData();
	}, []);

	return {
		appReady,
		navigationRef,
		fontsLoaded,
	};
};

export default usePrepare;
