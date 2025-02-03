import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FormType } from "types/formType";
import { CustomTextInput } from "@components/atom";
import { useForm } from "react-hook-form";
import CustomButton from "@components/atom/CustomButton";
import { colors } from "@themes/colors";

type Props = {
	formData: FormType<any>;
	onSubmit: (data: any) => void;
};

const Form = ({ formData, onSubmit }: Props) => {
	const { control, handleSubmit } = useForm({
		defaultValues: formData.defaultValues,
	});

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{formData.title}</Text>

			{formData.inputs.length > 0 && (
				<View style={styles.content}>
					{formData.inputs.map((item, index) => (
						<CustomTextInput
							key={index.toString()}
							inputData={item}
							control={control}
						/>
					))}
				</View>
			)}

			<CustomButton label={formData.label} onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

export default Form;

const styles = StyleSheet.create({
	container: {
		gap: 100,
	},
	content: {
		gap: 12,
	},
	title: {
		textAlign: "center",
		fontFamily: "SemiBold",
		fontSize: 22,
		color: colors["Shadow"],
	},
});
