import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import {
	createNativeStackNavigator,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/home";
import Search from "./src/screens/search";
import Profile from "./src/screens/profile/index";
import { Tabs } from "./src/components/tab/Tabs";
import Category from "./src/screens/category";
import { SafeAreaView } from "react-native";
import Product from "./src/screens/product";
import Detail from "./src/screens/detail";
import { RootStackParamList } from "./src/utilis/rootStackParamList";
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

type Props = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator();

export default function App({ route }: Props) {
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
					<Stack.Screen
						name="Product"
						component={Product}
						options={({ route }) => ({ title: route.params.name })}
					/>
					<Stack.Screen
						name="Detail"
						component={Detail}
						options={({ route }) => ({ title: route.params.name })}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
