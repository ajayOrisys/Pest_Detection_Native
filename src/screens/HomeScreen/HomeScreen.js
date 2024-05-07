import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./HomeScreenStyle";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity style={styles.btn__cta} onPress={() => navigation.navigate("Camera")} >
					<Text style={styles.btn__cta_text}>Open Camera</Text>
				</TouchableOpacity>
				<Text style={{color: "#f8f9fa", fontSize: 16}}>Or</Text>
				<TouchableOpacity style={styles.btn__cta}>
					<Text style={styles.btn__cta_text} onPress={() => navigation.navigate("Upload")}>Upload Image</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};


export default HomeScreen;
