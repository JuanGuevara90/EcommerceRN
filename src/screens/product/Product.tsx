import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FlatList, Image, Input } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/stack";
import { getProductsByCategory } from "../../api/getProducts";
import { RootStackParamList } from "../../utilis/rootStackParamList";
import { ProductModel } from "../../models/ProductModel";
import { styles } from "./Product.style";
import { searchProduct } from "./utils/array";

type Props = NativeStackScreenProps<
	RootStackParamList,
	"Home",
	"Category",
	"Product",
	"Search"
>;

const Product = ({ route }: Props) => {
	const [products, setProducts] = useState([]);
	const [text, setText] = useState("");

	useEffect(() => {
		const { category } = route.params;
		getProductsByCategory(category).then((response) => {
			const { products } = response.data;
			setProducts(products);
		});
	}, []);
	const GridView = ({ data }) => {
		const { price, thumbnail, title } = data;
		const [text, setText] = useState([]);
		return (
			<TouchableOpacity
				style={[styles.gridbox, styles.shadowProp]}
				onPress={() => {
					getOnPressItem(data);
				}}
			>
				<Image
					style={styles.image}
					source={{
						uri: thumbnail,
					}}
					alt="Alternate Text"
				/>
				<Text style={styles.label}>{title}</Text>
				<Text style={styles.label}>$ {price}</Text>
			</TouchableOpacity>
		);
	};

	const getOnPressItem = (data: string) => {
		console.log(data);
	};
	return (
		<View style={styles.container}>
			<Input
				style={[styles.textInput, styles.shadowProp]}
				value={text}
				onChangeText={setText}
				placeholder="Write product name here..."
			/>
			<FlatList<ProductModel>
				data={searchProduct(text, products)}
				renderItem={({ item }) => <GridView data={item} />}
				keyExtractor={(item) => item.title}
				numColumns={2}
				ListEmptyComponent={() => <Text> No found data.</Text>}
			/>
		</View>
	);
};

export default Product;
