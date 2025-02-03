import useHelper from "@hooks/useHelper";
import { getRandomJson } from "@services/randomService";
import { htmlDataState } from "@stores/dataStore";
import { useMutation } from "@tanstack/react-query";
import {
	htmlFooterTemplate,
	htmlHeaderlTemplate,
} from "@utils/constants/dataConst";
import * as FileSystem from "expo-file-system";
import { useSetRecoilState } from "recoil";

const useRandomModel = () => {
	const setHtmlData = useSetRecoilState(htmlDataState);

	const { onHandleMutate, onHandleSuccess, onHandleSettled } = useHelper();

	const useGetRandomJson = () =>
		useMutation({
			mutationKey: ["getRandomJson"],
			mutationFn: () => getRandomJson(),
			onMutate: onHandleMutate,
			onSuccess: (response) => {
				console.log(response);
				onHandleSuccess("Fetch success. Data print to terminal!");
			},
			onSettled: onHandleSettled,
		});

	const useGenerateHTML = () =>
		useMutation({
			mutationKey: ["generateHTML"],
			mutationFn: () => getRandomJson(),
			onMutate: onHandleMutate,
			onSuccess: async (response) => {
				const limitData = response.slice(0, 10);

				const htmlData =
					htmlHeaderlTemplate +
					`
					<tbody>
						${limitData.map(
							(item) => `
								<tr>
									<td>${item.userId}</td>
									<td>${item.id}</td>
									<td>${item.title}</td>
									<td>${item.body}</td>
								</tr>
							`
						)}
					</tbody>
				` +
					htmlFooterTemplate;

				const filePath = FileSystem.documentDirectory + "randomHtml.html";

				await FileSystem.writeAsStringAsync(filePath, htmlData);

				setHtmlData(response);

				onHandleSuccess(`HTML file saved at ${filePath}`);
			},
			onSettled: onHandleSettled,
		});

	return {
		useGetRandomJson,
		useGenerateHTML,
	};
};

export default useRandomModel;
