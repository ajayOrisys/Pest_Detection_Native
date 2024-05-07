import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "./WelcomeScreenStyle";

const bannerImage = require("../../../assets/images/Scavenger hunt-bro.png");

const WelcomeScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={bannerImage} style={styles.bannerImage} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.headingPrimary}>Detect Crop Diseases</Text>
				<Text style={styles.textDescription}>
					Capture or upload images of affected crops to recieve
					disease prediction & expert advice
				</Text>
			</View>

			<TouchableOpacity
				style={styles.btn__cta}
				onPress={() => navigation.navigate("Home")}
			>
				<Text style={styles.btn__cta_text}>Start</Text>
			</TouchableOpacity>
		</View>
	);
};


export default WelcomeScreen;
