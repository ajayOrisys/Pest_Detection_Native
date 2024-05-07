// CameraComponent.js
import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

if (typeof window !== "undefined" && !window.Worker) {
	// Create a mock Worker (simplified example)
	window.Worker = function () {
		this.onmessage = () => {};
		this.postMessage = () => {};
	};
}

const CameraComponent = ({ onPictureTaken, onClose }) => {
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [hasPermission, setHasPermission] = useState(null);
	const cameraRef = useRef(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	const toggleCameraType = () => {
		setType((current) =>
			current === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
		);
	};

	const handleTakePicture = async () => {
		if (!hasPermission) {
			Alert.alert("Camera permission denied");
			return;
		}

		const photo = await cameraRef.current.takePictureAsync({
			base64: true,
		});
		onPictureTaken(photo.uri);
	};

	if (hasPermission === null) {
		// Camera permissions are still loading
		return <View />;
	}

	if (!hasPermission) {
		// Camera permissions are not granted yet
		return (
			<View>
				<Text style={{ textAlign: "center", color: "#f8f9fa" }}>
					We need your permission to show the camera
				</Text>
			</View>
		);
	}

	return (
		<View style={styles.cameraContainer}>
			<Camera style={styles.camera} type={type} ref={cameraRef}>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={toggleCameraType}
						style={styles.btn}
					>
						<MaterialIcons
							name="flip-camera-ios"
							size={24}
							color="white"
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={handleTakePicture}
						style={styles.btn}
					>
						<Feather name="camera" size={24} color="white" />
					</TouchableOpacity>
				</View>
			</Camera>
		</View>
	);
};

const styles = StyleSheet.create({
	cameraContainer: {
		height: "100%",
		width: "100%",
	},
	camera: {
		height: "100%",
		width: "100%",
		justifyContent: "flex-end",
	},
	buttonContainer: {
		height: 120,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	btn: {
		borderWidth: 1,
		height: 50,
		width: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
		borderColor: "white",
	},
});

export default CameraComponent;
