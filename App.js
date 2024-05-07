import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CameraScreen from "./src/screens/CameraScreen/CameraScreen";
import UploadImageScreen from "./src/screens/UploadImageScreen/UploadImageScreen";
import ImagePreviewScreen from "./src/screens/ImagePreviewScreen/ImagePreviewScreen";
import ResultScreen from "./src/screens/ResultScreen/ResultScreen";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#333533",
					},
					headerTitleStyle: {
						color: "#f8f9fa",
					},
					headerTintColor: "#f8f9fa",
					...TransitionPresets.FadeFromBottomAndroid,
				}}
			>
				<Stack.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Camera" component={CameraScreen} />
				<Stack.Screen name="Upload" component={UploadImageScreen} />
				<Stack.Screen
					name="Image Preview"
					component={ImagePreviewScreen}
				/>
				<Stack.Screen name="Result" component={ResultScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
