import { StyleSheet } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import { Form } from "@components/molecule";
import { loginForm, logoutForm } from "@utils/constants/formConst";
import useFourth from "@hooks/useFourth";

const Fourth = () => {
	const { auth, loginService, logoutService } = useFourth();

	return (
		<MainContainer containerStyles={styles.container}>
			<Form
				formData={auth ? logoutForm : loginForm}
				onSubmit={auth ? logoutService : loginService}
			/>
		</MainContainer>
	);
};

export default Fourth;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
	},
});
