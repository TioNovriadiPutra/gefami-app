import CryptoJS from "crypto-js";

export const getCurrentDate = () => {
	const date = new Date();
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();

	return `${day}${month}${year}`;
};

export const generateHash = (value: string) => {
	const hashValue = CryptoJS.SHA256(value).toString(CryptoJS.enc.Hex);

	return hashValue;
};
