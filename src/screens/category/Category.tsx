import { Button } from "native-base";
import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	TouchableOpacity,
	TextInput,
	Image,
} from "react-native";
import { getCategories } from "../../api/getCategories";
import { getProductsByCategory } from "../../api/getProducts";
import { styles } from "./Category.style";
import { Entypo } from "@expo/vector-icons";
import Automitive from "../../assets/svg/automotive.svg";
import { SvgUri } from "react-native-svg";
import { SVGIcon } from "../../components/icon";
import { searchCategories } from "../../utilis/searchCategories";
import { replaceCharacter } from "../../utilis/replaceCharacter";

const Category = () => {
	const [text, setText] = useState("");
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let isSubscribed = true;
		getCategories()
			.then((response) => {
				setCategories(response.data);
			})
			.catch((error) => {});
		return () => (isSubscribed = false);
	}, []);

	const GridView = ({ data }) => {
		return (
			<TouchableOpacity
				style={styles.gridbox}
				onPress={() => {
					getOnPressItem(data);
				}}
			>
				{SVGIcon[String(data)]}
				<Text style={styles.label}>
					{replaceCharacter(data, "-", " ").toUpperCase()}
				</Text>
			</TouchableOpacity>
		);
	};

	const getOnPressItem = (data: string) => {
		console.log(data);
	};
	console.log(categories);
	return (
		<SafeAreaView style={styles.container}>
			<TextInput style={styles.textInput} value={text} onChangeText={setText} />

			<View
				style={{
					flex: 2,
				}}
			>
				<FlatList
					data={searchCategories(text, categories)}
					renderItem={({ item }) => <GridView data={item} />}
					numColumns={3}
					keyExtractor={(item) => item}
					ListEmptyComponent={() => <Text> No found data.</Text>}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Category;
