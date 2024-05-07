import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./ImagePreviewScreenStyle";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ImagePreviewScreen = ({ route }) => {
	const navigation = useNavigation();
	const selectedImage = route.params.selectedImage;

	const handleDetect = async () => {
		const apiUrl = "http://125.19.82.86:8000/upload";

		try {
			let result = null;
			const formData = new FormData();
			if (!selectedImage) {
				console.error("No image selected");
				return;
			}
			formData.append("file", {
				uri: selectedImage,
				name: "image.jpg",
				type: "image/jpeg",
			});

			const axiosResponse = await axios.post(apiUrl, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			if (axiosResponse.status === 200) {
				result = axiosResponse.data.predictions;
			} else {
				console.error(
					"Error in API request 200:",
					axiosResponse.statusText
				);
				result = axiosResponse.statusText;
			}
			navigation.navigate("Result", { image: selectedImage, result });
		} catch (error) {
			console.error("Error occurred:", error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.mainContent}>
				<Text style={styles.headingPrimary}>Selected Image</Text>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: selectedImage }}
						style={styles.image}
					/>
				</View>
				<View style={styles.btnContainer}>
					<TouchableOpacity
						style={[styles.btn, styles.btn__secondary]}
						onPress={() => navigation.goBack()}
					>
						<Text style={styles.btn__cta_text}>Retake</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.btn, styles.btn__cta]}
						onPress={handleDetect}
					>
						<Text style={styles.btn__cta_text}>Proceed</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default ImagePreviewScreen;
