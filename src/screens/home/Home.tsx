import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableWithoutFeedback } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/stack";
import {
	Center,
	Container,
	Text,
	Heading,
	Divider,
	Flex,
	Image,
	Box,
	VStack,
	Stack,
	HStack,
	AspectRatio,
} from "native-base";
import { getCategories } from "../../api/getCategories";
import { styles } from "./Home.style";
import Title from "../../components/commons/title";
import Card from "../../components/card";
import { RootStackParamList } from "../../utilis/rootStackParamList";

type Props = NativeStackScreenProps<
	RootStackParamList,
	"Home",
	"Category",
	"Product",
	"Search"
>;

const Home = ({ navigation }: Props) => {
	const [categories, setCategories] = useState([]);
	const [products, setProduts] = useState([]);

	useEffect(() => {
		getCategories()
			.then((response) => {
				setCategories(response.data.slice(0, 3));
			})
			.catch();
	}, []);
	return (
		<ScrollView style={styles.main_container}>
			<Center>
				<Image
					style={styles.image}
					source={require("../../assets/banner.jpeg")}
					alt="Alternate Text"
				/>
			</Center>
			<Center>
				<Container mt="3">
					<Title title="Categories" />
				</Container>
				<Container my="5">
					<Flex mx="3" direction="row" justify="space-between" h="60">
						{categories.map((category) => (
							<Center mx="0.5" my="5" key={`category_${category}`}>
								<Image
									size={60}
									borderRadius={100}
									source={{
										uri: "https://wallpaperaccess.com/full/317501.jpg",
									}}
									alt="Alternate Text"
								/>
								<Text>{category}</Text>
							</Center>
						))}
						<Center mx="0.5" my="5" key={`category_more`}>
							<TouchableWithoutFeedback
								onPress={() => {
									navigation.navigate("Category");
								}}
							>
								<View>
									<Image
										size={60}
										borderRadius={100}
										source={{
											uri: "https://wallpaperaccess.com/full/317501.jpg",
										}}
										alt="Alternate Text"
									/>
									<Text>See more</Text>
								</View>
							</TouchableWithoutFeedback>
						</Center>
					</Flex>
				</Container>

				<Container>
					<Title title="Best Seller" />
					<Flex mx="3" direction="row" justify="space-between" h="60">
						<Card />
						<Card />
					</Flex>
				</Container>
			</Center>
		</ScrollView>
	);
};

export default Home;
