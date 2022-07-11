import { Center } from "native-base";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textInput: {
		marginTop: 10,
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 10,
		marginHorizontal: 5,
		borderWidth: 0.5,
		borderRadius: 10,
		borderColor: "success",
	},
	gridbox: {
		flex: 0.5,
		height: 280,
		marginHorizontal: 5,
		borderRadius: 20,
		marginTop: 10,
		backgroundColor: "#fffffff7",
	},
	image: {
		resizeMode: "stretch",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		width: 400,
		height: 200,
	},
	label: {
		fontStyle: "italic",
		fontSize: 12,
		textAlign: "left",
		marginLeft: 30,
		marginTop: 15,
	},
	shadowProp: {
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});
