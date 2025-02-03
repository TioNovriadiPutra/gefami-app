import React from "react";
import { AppStack } from "@utils/config/navigation";
import First from "@views/First";
import Second from "@views/Second";
import SecondWebView from "@views/SecondWebView";
import Third from "@views/Third";
import Fourth from "@views/Fourth";

const AppRoute = () => {
	return (
		<AppStack.Navigator initialRouteName="First">
			<AppStack.Screen
				name="First"
				component={First}
				options={{ headerShown: false }}
			/>
			<AppStack.Screen
				name="Second"
				component={Second}
				options={{ headerShown: false }}
			/>
			<AppStack.Screen
				name="SecondWebView"
				component={SecondWebView}
				options={{ headerShown: false }}
			/>
			<AppStack.Screen
				name="Third"
				component={Third}
				options={{ headerShown: false }}
			/>
			<AppStack.Screen
				name="Fourth"
				component={Fourth}
				options={{ headerShown: false }}
			/>
		</AppStack.Navigator>
	);
};

export default AppRoute;
