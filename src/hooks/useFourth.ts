import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authInitialState, authState } from "@stores/authStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateHash } from "@utils/helpers/generator";
import { toastSelector } from "@stores/toastStore";

const useFourth = () => {
	const [authInitial, setAuthInitial] = useRecoilState(authInitialState);
	const [auth, setAuth] = useRecoilState(authState);

	const setToast = useSetRecoilState(toastSelector);

	const initialUsername = async () => {
		const dataInitial = await AsyncStorage.getItem("@dataInitial");

		if (dataInitial) {
			if (authInitial === null) {
				setAuthInitial(JSON.parse(dataInitial));
			}
		} else {
			await AsyncStorage.setItem(
				"@dataInitial",
				JSON.stringify({
					username: "admin123",
					password: generateHash("secretpassword"),
				})
			);

			setAuthInitial({
				username: "admin123",
				password: generateHash("secretpassword"),
			});
		}
	};

	const checkIsLoggedIn = async () => {
		const authData = await AsyncStorage.getItem("@auth");

		if (authData) {
			setAuth(JSON.parse(authData));
		}
	};

	const loginService = async (data: any) => {
		const hashPass = generateHash(data.password || "");

		if (
			data.username === authInitial?.username &&
			hashPass === authInitial?.password
		) {
			await AsyncStorage.setItem(
				"@auth",
				JSON.stringify({
					username: data.username,
					password: hashPass,
				})
			);

			setAuth({
				username: data.username,
				password: hashPass,
			});

			setToast({
				show: true,
				type: "success",
				message: "Login success!",
			});
		} else {
			setToast({
				show: true,
				type: "failed",
				message: "Email or Password incorrect!",
			});
		}
	};

	const logoutService = (data: any) => {
		AsyncStorage.removeItem("@auth");
		setAuth(null);
		setToast({ show: true, type: "success", message: "Logout success!" });
	};

	useEffect(() => {
		initialUsername();
	}, []);

	useEffect(() => {
		checkIsLoggedIn();
	}, []);

	return {
		auth,
		loginService,
		logoutService,
	};
};

export default useFourth;
