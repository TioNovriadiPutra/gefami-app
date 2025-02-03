import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "@components/atom/CustomButton";
import { CustomTextInput } from "@components/atom";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { htmlDataState } from "@stores/dataStore";
import { toastSelector } from "@stores/toastStore";
import {
	htmlFooterTemplate,
	htmlHeaderlTemplate,
} from "@utils/constants/dataConst";
import * as FileSystem from "expo-file-system";
import { isLoadingState } from "@stores/pageStore";

const HTMLDelete = () => {
	const [htmlData, setHtmlData] = useRecoilState(htmlDataState);

	const setToast = useSetRecoilState(toastSelector);
	const setIsLoading = useSetRecoilState(isLoadingState);

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			id: undefined,
		},
	});

	const onHandleDelete = async (data: any) => {
		setIsLoading(true);

		if (
			data.id === undefined ||
			parseInt(data.id) > htmlData.length - 1 ||
			parseInt(data.id) < 0
		) {
			setToast({ show: true, type: "failed", message: "Data not found!" });
			reset();
		} else {
			const newData = JSON.parse(JSON.stringify(htmlData));
			newData.splice(parseInt(data.id), 1);
			const limitData = newData.slice(0, 10);

			const newHtmlData =
				htmlHeaderlTemplate +
				`
			  <tbody>
			    ${limitData.map(
						(item: any) => `
			        <tr>
			          <td>${item.userId}</td>
			          <td>${item.id}</td>
			          <td>${item.title}</td>
			          <td>${item.body}</td>
			        </tr>
			      `
					)}
			  </tbody>
			        ` +
				htmlFooterTemplate;

			const filePath = FileSystem.documentDirectory + "randomHtml.html";

			await FileSystem.writeAsStringAsync(filePath, newHtmlData);

			setHtmlData(newData);

			reset();

			setToast({ show: true, type: "success", message: "Data deleted!" });
		}

		setIsLoading(false);
	};

	return (
		<View style={styles.container}>
			<CustomButton
				label="Delete Key"
				containerStyles={styles.button}
				onPress={handleSubmit(onHandleDelete)}
			/>

			<View style={styles.button}>
				{htmlData.length === 0 ? (
					<Text style={styles.message}>Generate HTML First!</Text>
				) : (
					<CustomTextInput
						inputData={{
							type: "number",
							name: "id",
							placeholder: `1 - ${
								htmlData.length === 0 ? 0 : htmlData.length - 1
							}`,
						}}
						control={control}
					/>
				)}
			</View>
		</View>
	);
};

export default HTMLDelete;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 24,
	},
	button: {
		flex: 1,
	},
	message: {
		fontFamily: "Regular",
		fontSize: 14,
	},
});
