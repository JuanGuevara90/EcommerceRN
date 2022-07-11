import { View, Text } from "react-native";
import React from "react";
import { Box, Fab, Icon } from "native-base";

const Detail = () => {
	return (
		<View>
			<Text>Detail</Text>
			<Box position="relative" h={100} w="100%">
				<Fab
					position="absolute"
					size="sm"
					icon={<Icon color="white" size="sm" />}
				/>
			</Box>
		</View>
	);
};

export default Detail;
