import { StyleSheet, Text } from "react-native";
import React from "react";
import MainContainer from "@containers/MainContainer";
import CustomButton from "@components/atom/CustomButton";
import { generateHash, getCurrentDate } from "@utils/helpers/generator";
import { useSetRecoilState } from "recoil";
import { toastSelector } from "@stores/toastStore";

const Third = () => {
	const setToast = useSetRecoilState(toastSelector);

	const onHandleHash = () => {
		const hash = generateHash(`${getCurrentDate()}tiopriaifabula`);

		console.log(hash);

		setToast({
			show: true,
			type: "success",
			message: "Hash success. Check your terminal!",
		});
	};

	return (
		<MainContainer containerStyles={styles.container}>
			<CustomButton label="Generate Hash" onPress={onHandleHash} />
			<Text>
				Pada file itemdebug.html terdapat beberapa error yang saya temukan:
				{`\n\n`}
				1. Pada line 22 terdapat error dimana tutup kurung kurawal tidak
				diberikan koma dimana selanjutnya masih terdapat data lagi dalam array.
				{`\n\n`}
				2. Pada line 443 terdapat error dimana value tidak memiliki tutup kutip
				sehingga value tidak bisa dibaca
				{"\n\n"}
				3. Pada line 453 terdapat error dimana valueAsString tidak di berikan
				value apapun baik itu string, undefined, atau null
				{"\n\n"}
				4. Pada line 541 terdapat kesalahan dalam memanggil value dimana
				seharusnya memanggil b.attribute tapi memanggil b.attributes
				{"\n\n"}
				5. Pada line 552 terdapat kesalahan dimana tidak memberi index pada
				cleanA[] yang seharusnya cleanA[i]
			</Text>
		</MainContainer>
	);
};

export default Third;

const styles = StyleSheet.create({
	container: {
		gap: 32,
	},
});
