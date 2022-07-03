import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../src/screens/home";
import Profile from "../../src/screens/profile";
import Search from "../../src/screens/search";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarLabel: "Search",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="search" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ color, size }) => (
						<Entypo name="user" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
