import React from "react";
import { View, Text } from "react-native";
import styles from "./UploadImageScreenStyle";
import UploadImageComponent from "../../components/UploadImageComponent";
import { useNavigation } from "@react-navigation/native";

const UploadImageScreen = () => {
	const navigation = useNavigation();

	const handleImageUpload = (uri) => {
		navigation.navigate("Image Preview", { selectedImage: uri });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.primaryText}>Choose an image to upload</Text>
			<UploadImageComponent onImageSelected={handleImageUpload} />
		</View>
	);
};

export default UploadImageScreen;
