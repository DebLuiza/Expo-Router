
import { Stack } from "expo-router";
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from "react-native";

const DetailsPage = () => {
    const {id} = useLocalSearchParams()
    return (
        <View>
            <Stack.Screen options={{headerTitle: `Details #${id}`}}/>
            <Text>My details for: {id}</Text>
        </View>
    )
}

export default DetailsPage;