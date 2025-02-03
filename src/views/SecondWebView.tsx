import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import {
	htmlFooterTemplate,
	htmlHeaderlTemplate,
} from "@utils/constants/dataConst";
import { useIsFocused } from "@react-navigation/native";
import WebView from "react-native-webview";

const SecondWebView = () => {
	const [htmlData, setHtmlData] = useState(
		htmlHeaderlTemplate + htmlFooterTemplate
	);

	const isFocused = useIsFocused();

	const readFirstData = async () => {
		const filePath = FileSystem.documentDirectory + "randomHtml.html";
		const fileExist = await FileSystem.getInfoAsync(filePath);

		if (fileExist.exists) {
			const content = await FileSystem.readAsStringAsync(filePath, {
				encoding: FileSystem.EncodingType.UTF8,
			});

			setHtmlData(content);
		}
	};

	useEffect(() => {
		if (isFocused) {
			readFirstData();
		}
	}, [isFocused]);

	return <WebView style={styles.container} source={{ html: htmlData }} />;
};

export default SecondWebView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
