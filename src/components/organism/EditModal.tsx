import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { labelForm } from "@utils/constants/formConst";
import { Form } from "@components/molecule";
import { useRecoilState } from "recoil";
import { editSelector } from "@stores/pageStore";
import * as FileSystem from "expo-file-system";

const EditModal = () => {
	const [edit, setEdit] = useRecoilState(editSelector);

	const onHandleSubmit = async (data: any) => {
		const filePath = FileSystem.documentDirectory + "data.json";
		const fileExist = await FileSystem.getInfoAsync(filePath);

		if (fileExist.exists) {
			const content = await FileSystem.readAsStringAsync(filePath, {
				encoding: FileSystem.EncodingType.UTF8,
			});
			const jsonContent = JSON.parse(content);

			const updatedData = Object.assign(jsonContent, {
				data: jsonContent.data.map((item: any) => {
					if (item.id === edit.id) {
						Object.assign(item, {
							row: item.row.map((item2: any, index: number) => {
								if (index === 1) {
									Object.assign(item2, {
										label: data.labelName,
									});
								}

								return item2;
							}),
						});
					}

					return item;
				}),
			});

			await FileSystem.writeAsStringAsync(
				filePath,
				JSON.stringify(updatedData, null, 2)
			);
		}

		setEdit({ show: false, id: 0 });
	};

	return (
		<Modal transparent visible={edit.show}>
			<View style={styles.modal}>
				<View style={styles.content}>
					<Form formData={labelForm} onSubmit={onHandleSubmit} />
				</View>
			</View>
		</Modal>
	);
};

export default EditModal;

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: colors["Modal"],
		justifyContent: "center",
		paddingHorizontal: 16,
		zIndex: 999,
	},
	content: {
		backgroundColor: colors["White"],
		paddingHorizontal: 18,
		paddingTop: 35,
		paddingBottom: 19,
		borderRadius: 8,
		gap: 24,
	},
});
