import React, { useEffect, useState } from "react";
import { AppTable } from "@components/organism";
import { firstTable } from "@utils/constants/pageConst";
import * as FileSystem from "expo-file-system";
import { useRecoilValue } from "recoil";
import { editSelector } from "@stores/pageStore";
import MainContainer from "@containers/MainContainer";

const First = () => {
	const [firstData, setFirstData] = useState([]);
	const edit = useRecoilValue(editSelector);

	const readFirstData = async () => {
		const filePath = FileSystem.documentDirectory + "data.json";
		const fileExist = await FileSystem.getInfoAsync(filePath);

		if (fileExist.exists) {
			const content = await FileSystem.readAsStringAsync(filePath, {
				encoding: FileSystem.EncodingType.UTF8,
			});

			setFirstData(JSON.parse(content).data);
		}
	};

	useEffect(() => {
		if (!edit.show) readFirstData();
	}, [edit.show]);

	return (
		<MainContainer>
			<AppTable tableData={firstTable} contentData={firstData} />
		</MainContainer>
	);
};

export default First;
