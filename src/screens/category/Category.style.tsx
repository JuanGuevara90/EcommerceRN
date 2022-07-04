import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textInput: {
		textAlign: "right",
		marginTop: 10,
		paddingVertical: 10,
		marginHorizontal: 5,
		borderWidth: 0.5,
		borderRadius: 5,
		borderColor: "success",
	},
	button: {
		borderRadius: 10,
		marginVertical: 5,
		padding: 10,
		backgroundColor: "#187a38",
	},
	gridbox: {
		flex: 1,
		height: 200,
		marginHorizontal: 2,
		marginTop: 10,
		backgroundColor: "#fffffff7",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},

	gridText: {
		fontSize: 20,
		color: "black",
	},
	image: {
		borderRadius: 10,
		margin: 10,
		width: 120,
		height: 120,
		resizeMode: "center",
	},
	label: {
		textAlign: "center",
		marginTop: 10,
	},
});
