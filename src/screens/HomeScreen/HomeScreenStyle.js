import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: "#333533",
        justifyContent: "center",
        alignContent: "center"
	},
    buttonsContainer: {
		gap: 10,
        alignItems:"center"
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
