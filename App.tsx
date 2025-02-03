import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "AppNav";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@utils/config/client";

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<AppNav />
			</RecoilRoot>
		</QueryClientProvider>
	);
};

export default App;
