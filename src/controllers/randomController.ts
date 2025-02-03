import useRandomModel from "@models/randomModel";

const useRandomController = () => {
	const { useGetRandomJson, useGenerateHTML } = useRandomModel();

	const getRandomJsonMutation = useGetRandomJson();
	const generateHTMLMutation = useGenerateHTML();

	return {
		getRandomJsonService: () => getRandomJsonMutation.mutate(),
		generateHTMLService: () => generateHTMLMutation.mutate(),
	};
};

export default useRandomController;
