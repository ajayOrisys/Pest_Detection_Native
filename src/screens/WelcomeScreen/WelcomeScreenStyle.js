import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 25,
		backgroundColor: "#333533",
	},
	imageContainer: {
		marginTop: "20%",
		marginBottom: "10%",
		alignSelf: "center",
		width: "100%",
		height: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	bannerImage: {
		width: "87%",
		height: "87%",
	},
	textContainer: {
		marginBottom: 40,
		marginHorizontal: "6%",
	},
	headingPrimary: {
		fontSize: 29,
		color: "#f8f9fa",
		marginBottom: 10,
		textAlign: "center",
	},
	textDescription: {
		fontSize: 16,
		color: "#AAAAAA",
		textAlign: "center",
	},
	btn__cta: {
		alignSelf: "center",
		width: "65%",
		padding: 15,
		backgroundColor: "#037e5e",
		borderRadius: 200,
	},
	btn__cta_text: {
		alignSelf: "center",
		fontSize: 20,
		color: "#f8f9fa",
	},
});

export default styles;
