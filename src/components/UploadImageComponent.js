// UploadImageComponent.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const UploadImageComponent = ({ onImageSelected, onClose }) => {
	const [mediaLibraryPermission, setMediaLibraryPermission] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } =
				await ImagePicker.getMediaLibraryPermissionsAsync();
			setMediaLibraryPermission(status === "granted");
		})();
	}, []);

	const handleUploadPress = async () => {
		// if (!mediaLibraryPermission) {
		//   console.log(mediaLibraryPermission)
		//   console.log("Media library permission not granted");
		//   // Handle the case when permission is not granted
		//   return;
		// }

		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				base64: false,
			});

			if (!result.canceled) {
				onImageSelected(result.assets[0].uri);

				// Call your API with the image data (result.base64)
				// Handle the API response
			} else {
				console.log("ImagePicker Cancelled");
			}
		} catch (error) {
			console.error("Expo ImagePicker Error: ", error);
		}
	};

	return (
		<View style={styles.buttonContainer}>
			<TouchableOpacity onPress={handleUploadPress} style={styles.btn__cta}>
				<Text style={styles.btn__cta_text}>Choose File</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: "90%"
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

export default UploadImageComponent;
