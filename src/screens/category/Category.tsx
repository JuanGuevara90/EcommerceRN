import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SVGIcon } from "../../components/icon";
import { getCategories } from "../../api/getCategories";
import { searchCategories } from "../../utilis/searchCategories";
import { styles } from "./Category.style";

import { alphabeticalOrder, formatText } from "./utils/strings";
import { Input } from "native-base";

const Category = () => {
	const [text, setText] = useState("");
	const [categories, setCategories] = useState<Array<String>>([]);

	useEffect(() => {
		getCategories()
			.then((response) => {
				setCategories(alphabeticalOrder(response.data));
			})
			.catch((error) => {});
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
				<Text style={styles.label}>{formatText(data)}</Text>
			</TouchableOpacity>
		);
	};

	const getOnPressItem = (data: string) => {
		console.log(data);
	};

	return (
		<View style={styles.container}>
			<Input
				style={styles.textInput}
				value={text}
				onChangeText={setText}
				placeholder="Write category name here..."
			/>

			<FlatList
				data={searchCategories(text, categories)}
				renderItem={({ item }) => <GridView data={item} />}
				numColumns={3}
				keyExtractor={(item) => item}
				ListEmptyComponent={() => <Text> No found data.</Text>}
			/>
		</View>
	);
};

export default Category;
