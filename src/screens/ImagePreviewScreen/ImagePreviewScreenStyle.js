import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333533",
		paddingHorizontal: 25,
		justifyContent: "center",
	},
	mainContent: {
		height: "80%",
	},
	headingPrimary: {
		color: "#f8f9fa",
		fontSize: 20,
		marginBottom: 10,
	},
	imageContainer: {
		height: "80%",
		width: "100%",
		marginBottom: 30,
	},
	image: {
		height: "100%",
		width: "100%",
		borderRadius: 10,
	},
	btnContainer: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 16,
		alignItems: "center",
	},
	btn: {
		alignSelf: "center",
		width: "35%",
		padding: 15,
		borderRadius: 200,
	},
	btn__cta: {
		backgroundColor: "#037e5e",
	},
	btn__secondary: {
		borderWidth: 0.5,
		// borderColor: "#f8f9fa",
		backgroundColor: "rgba(128, 128, 128, 0.6)",
	},
	btn__cta_text: {
		alignSelf: "center",
		fontSize: 20,
		color: "#f8f9fa",
	},
});

export default styles;
