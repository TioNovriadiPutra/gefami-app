import { isLoadingState } from "@stores/pageStore";
import { toastSelector } from "@stores/toastStore";
import { useSetRecoilState } from "recoil";

const useHelper = () => {
	const setIsLoading = useSetRecoilState(isLoadingState);
	const setToast = useSetRecoilState(toastSelector);

	const onHandleMutate = () => {
		setIsLoading(true);
	};

	const onHandleSuccess = (message: string) => {
		setToast({ show: true, type: "success", message });
	};

	const onHandleSettled = () => {
		setIsLoading(false);
	};

	return {
		onHandleMutate,
		onHandleSuccess,
		onHandleSettled,
	};
};

export default useHelper;
