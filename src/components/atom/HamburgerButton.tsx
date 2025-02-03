import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@themes/sizing";
import { useSetRecoilState } from "recoil";
import { showMenuState } from "@stores/pageStore";

const HamburgerButton = () => {
	const setShowMenu = useSetRecoilState(showMenuState);

	const onHandleMenu = () => {
		setShowMenu(true);
	};

	return (
		<TouchableOpacity onPress={onHandleMenu}>
			<Image
				source={require("@assets/images/hamburger.png")}
				style={icons["IconMD"]}
			/>
		</TouchableOpacity>
	);
};

export default HamburgerButton;
