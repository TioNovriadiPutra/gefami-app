import { useRecoilState } from "recoil";
import { toastSelector } from "@stores/toastStore";
import {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withSequence,
	withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const useToast = () => {
	const [toast, setToast] = useRecoilState(toastSelector);

	const toastAnim = useSharedValue(0);

	const toastAnimatedStyle = useAnimatedStyle(() => {
		const translateY = interpolate(toastAnim.value, [0, 1], [50, 0]);

		return {
			transform: [{ translateY }],
			opacity: toastAnim.value,
		};
	});

	useEffect(() => {
		if (toast.show) {
			toastAnim.value = withSequence(
				withTiming(1, { duration: 500 }),
				withDelay(3000, withTiming(0, { duration: 500 }))
			);

			const timeoutToast = setTimeout(() => {
				setToast({ show: false, type: "failed", message: "" });
			}, 4500);

			return () => clearTimeout(timeoutToast);
		}
	}, [toast]);

	return {
		toast,
		toastAnimatedStyle,
	};
};

export default useToast;
