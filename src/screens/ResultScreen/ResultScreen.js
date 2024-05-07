import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./ResultScreenStyle";
import diseaseData from "../../data/DiseaseDetails.json";
import { useNavigation } from "@react-navigation/native";

const ResultScreen = ({ route }) => {
	const navigation = useNavigation();
	const image = route.params.image;
	const result = route.params.result;
	const disease = diseaseData["disease_data"];
	const confidenceString = result?.predictions[0]?.confidence?.toString(); // Convert to string if it exists
	console.log(confidenceString)

	let predicted_disease = "";

	if (confidenceString) {
		if (confidenceString.includes("e")) {
			predicted_disease = "";
		} else {
			const confidence_percentage = Math.floor(
				parseFloat(confidenceString) * 100
			); // Parse as float before multiplying
			if (confidence_percentage > 80) {
				predicted_disease = result?.predictions[0].label;
			} else {
				predicted_disease = "";
			}
		}
	} else {
		console.warn("Confidence information missing from API response.");
		predicted_disease = ""; // Set a default value for unidentified object
	}

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.mainContent}>
					<View style={styles.imageContainer}>
						<Image style={styles.image} source={{ uri: image }} />
					</View>
					<View style={styles.resultContainer}>
						{predicted_disease ? (
							// Display disease information if identified
							<View>
								<View style={styles.sectionContainer}>
									<Text
										style={[
											styles.headingSecondary,
											styles.yellowText,
										]}
									>
										Detected:{" "}
										<Text style={styles.diseaseText}>
											{disease[predicted_disease]?.name}
										</Text>
									</Text>
									{disease[predicted_disease]?.cause ? (
										<Text style={[styles.textPrimary]}>
											Cause:{" "}
											<Text style={styles.textItalic}>
												{
													disease[predicted_disease]
														?.cause
												}
											</Text>
										</Text>
									) : null}
								</View>
								<View style={styles.sectionContainer}>
									<Text
										style={[
											styles.textPrimary,
											styles.headingPrimary,
											styles.yellowText,
										]}
									>
										Description
									</Text>
									<Text
										style={[
											styles.textPrimary,
											styles.text18,
										]}
									>
										{
											disease[predicted_disease]
												?.description
										}
									</Text>
								</View>
								<View style={styles.sectionContainer}>
									<Text
										style={[
											styles.textPrimary,
											styles.headingPrimary,
											styles.yellowText,
										]}
									>
										Symptoms
									</Text>
									<Text
										style={[
											styles.textPrimary,
											styles.text18,
										]}
									>
										{disease[predicted_disease]?.symptoms}
									</Text>
								</View>
								<View
									style={[
										styles.sectionContainer,
										styles.lastSectionContainer,
									]}
								>
									<Text
										style={[
											styles.textPrimary,
											styles.headingPrimary,
											styles.yellowText,
										]}
									>
										Treatment
									</Text>
									{disease[predicted_disease]?.treatment.map(
										(item, index) => (
											<View
												key={index}
												style={{ flexDirection: "row" }}
											>
												<Text
													style={[
														styles.textPrimary,
														{ marginRight: 10 },
													]}
												>
													•
												</Text>
												<Text
													style={[
														styles.textPrimary,
														styles.text18,
													]}
												>
													{item}
												</Text>
											</View>
										)
									)}
								</View>
							</View>
						) : (
							// Display unidentified message if not identified
							<View style={styles.sectionContainer}>
								<Text
									style={[
										styles.headingSecondary,
										{ color: "red" },
									]}
								>
									{predicted_disease
										? ""
										: "Unidentified Object"}
								</Text>
								<Text style={styles.textPrimary}>
									{predicted_disease
										? ""
										: "Confidence is low or the object could not be identified. Please try again with a clearer image."}
								</Text>
							</View>
						)}
						<View>
							<TouchableOpacity
								style={styles.btn__cta}
								onPress={() => navigation.navigate("Welcome")}
							>
								<Text style={styles.btn__cta_text}>
									Go Back to Home
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default ResultScreen;
