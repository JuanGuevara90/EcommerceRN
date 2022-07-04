import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/home";
import Search from "./src/screens/search";
import Profile from "./src/screens/profile/index";
import { Tabs } from "./src/components/tab/Tabs";
import Category from "./src/screens/category";

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
	interface ICustomTheme extends MyThemeType {}
}

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Tabs"
						component={Tabs}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Category"
						component={Category}
						options={{ title: "Categories" }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
