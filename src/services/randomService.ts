import { JsonDTO } from "@interfaces/jsonInterface";
import { API_ENDPOINT } from "@utils/config/api";
import axios, { AxiosError } from "axios";

export const getRandomJson = async () => {
	try {
		const response = await axios.get(API_ENDPOINT.getRandomJson);

		return response.data as JsonDTO[];
	} catch (error) {
		const axiosError = error as AxiosError;

		throw axiosError;
	}
};
