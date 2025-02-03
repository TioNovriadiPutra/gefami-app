import { useRecoilState } from "recoil";
import { showMenuState } from "@stores/pageStore";
import {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import { NavigationContainerRefWithCurrent } from "@react-navigation/native";
import { AppStackParamList } from "types/navigationType";

const useMenuModal = (
	navigationRef: NavigationContainerRefWithCurrent<AppStackParamList>
) => {
	const [menuHeight, setMenuHeight] = useState(0);

	const [showMenu, setShowMenu] = useRecoilState(showMenuState);

	const menuAnim = useSharedValue(0);

	const menuAnimatedStyle = useAnimatedStyle(() => {
		const height = interpolate(menuAnim.value, [0, 1], [0, menuHeight]);

		return {
			height,
		};
	});

	const onHandleHeight = (e: LayoutChangeEvent) => {
		const { height } = e.nativeEvent.layout;

		setMenuHeight(height);
	};

	const onHandleClose = () => {
		menuAnim.value = withTiming(0, { duration: 500 });

		setTimeout(() => {
			setShowMenu(false);
		}, 500);
	};

	const onHandleNav = (dest: keyof AppStackParamList) => {
		navigationRef.current?.navigate(dest);
		onHandleClose();
	};

	useEffect(() => {
		if (showMenu) {
			menuAnim.value = withTiming(1, { duration: 500 });
		}
	}, [showMenu]);

	return {
		showMenu,
		menuAnimatedStyle,
		onHandleHeight,
		onHandleClose,
		onHandleNav,
	};
};

export default useMenuModal;
