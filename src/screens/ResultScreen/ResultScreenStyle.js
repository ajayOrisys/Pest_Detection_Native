import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333533",
	},
	scrollContent: {},
	mainContent: {
		padding: 25,
		paddingTop: 40,
	},
	headingPrimary: {
		color: "#f8f9fa",
		fontSize: 26,
		marginBottom: 8,
		fontWeight: "semibold",
	},
	headingSecondary: {
		fontSize: 22,
		fontWeight: "600",
		marginBottom: 8,
	},
	imageContainer: {
		height: 300,
		width: "100%",
		marginBottom: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		height: "100%",
		width: "100%",
		borderRadius: 10,
	},
	sectionContainer: {
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderColor: "#808080",
		marginBottom: 16,
	},
	lastSectionContainer: {
		borderBottomWidth: 0,
	},
	diseaseText: {
		color: "#f8f9fa",
		fontWeight: "400",
	},
	yellowText: {
		color: "#e3b448",
	},
	textPrimary: {
		color: "#f8f9fa",
		fontSize: 15,
	},
	textItalic: {
		fontStyle: "italic",
	},
	descriptionContainer: {},
	text18: {
		fontSize: 18,
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
