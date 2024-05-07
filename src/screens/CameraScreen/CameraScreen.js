import React from "react";
import { Text, View } from "react-native";
import styles from "./CameraScreenStyle";
import CameraComponent from "../../components/CameraComponent";
import { useNavigation } from "@react-navigation/native";

const CameraScreen = () => {
	const navigation = useNavigation();

	const handleImageClick = (uri) => {
		navigation.navigate("Image Preview", { selectedImage: uri });
	};
	return (
		<View style={styles.container}>
			<CameraComponent onPictureTaken={handleImageClick} />
		</View>
	);
};

export default CameraScreen;
