import {
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { InputType } from "types/formType";
import { Control, useController } from "react-hook-form";
import { colors } from "@themes/colors";
import { icons } from "@themes/sizing";

type Props = {
	inputData: InputType;
	control: Control<any, any>;
	onSubmit?: () => void;
};

const CustomTextInput = ({ inputData, control, onSubmit }: Props) => {
	const [showPass, setShowPass] = useState(false);

	const { field } = useController({
		name: inputData.name,
		control,
	});

	const onHandlePass = () => {
		setShowPass(!showPass);
	};

	return (
		<View style={styles.container}>
			<TextInput
				value={field.value}
				placeholder={inputData.placeholder}
				placeholderTextColor={colors["Placeholder"]}
				style={styles.input}
				onChangeText={field.onChange}
				onSubmitEditing={onSubmit}
				secureTextEntry={inputData.type === "password" ? !showPass : false}
				keyboardType={inputData.type === "number" ? "numeric" : "default"}
			/>

			{inputData.type === "password" && (
				<TouchableOpacity onPress={onHandlePass}>
					<Image
						source={
							showPass
								? require("@assets/images/see.png")
								: require("@assets/images/unsee.png")
						}
						style={icons["IconMD"]}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default CustomTextInput;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 18.36,
		paddingVertical: 5,
		borderWidth: 1,
		borderColor: colors["Border"],
		borderRadius: 10,
	},
	input: {
		flex: 1,
		fontFamily: "Regular",
		fontSize: 14,
		color: colors["Shadow"],
		includeFontPadding: false,
	},
});
