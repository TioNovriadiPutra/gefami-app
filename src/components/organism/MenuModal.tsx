import {
	Modal,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React from "react";
import useMenuModal from "@hooks/useMenuModal";
import { colors } from "@themes/colors";
import { MenuContent, MenuHeader } from "@components/molecule";
import Animated from "react-native-reanimated";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { AppStackParamList } from "types/navigationType";

type Props = {
	navigationRef: NavigationContainerRefWithCurrent<AppStackParamList>;
};

const MenuModal = ({ navigationRef }: Props) => {
	const {
		showMenu,
		menuAnimatedStyle,
		onHandleHeight,
		onHandleClose,
		onHandleNav,
	} = useMenuModal(navigationRef);

	return (
		<Modal transparent visible={showMenu}>
			<View style={styles.modal}>
				<MenuHeader onClose={onHandleClose} />

				<Animated.View style={[styles.content, menuAnimatedStyle]}>
					<MenuContent onHeight={onHandleHeight} onNav={onHandleNav} />
				</Animated.View>

				<TouchableWithoutFeedback onPress={onHandleClose}>
					<View style={styles.backdrop} />
				</TouchableWithoutFeedback>
			</View>
		</Modal>
	);
};

export default MenuModal;

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		zIndex: 997,
	},
	backdrop: {
		flex: 1,
		backgroundColor: colors["Modal"],
	},
	content: {
		backgroundColor: colors["White"],
		overflow: "hidden",
	},
});
