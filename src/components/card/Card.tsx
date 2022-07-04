import { View } from "react-native";
import React from "react";
import {
	AspectRatio,
	Box,
	Text,
	Center,
	Heading,
	HStack,
	Image,
	Stack,
	Container,
} from "native-base";

const Card = () => {
	return (
		<Box
			style={{
				flex: 1,
				borderColor: "gray",
				borderWidth: 4,
				height: 200,
				margin: 4,
				borderRadius: 8,
			}}
		>
			<Image
				style={{ resizeMode: "stretch" }}
				size={150}
				source={{
					uri: "https://wallpaperaccess.com/full/317501.jpg",
				}}
				alt="Alternate Text"
			/>
		</Box>
	);
};

export default Card;
