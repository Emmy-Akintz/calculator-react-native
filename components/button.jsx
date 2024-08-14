import { Text, TouchableOpacity } from "react-native";

export default function Button(props) {
    return (
        <TouchableOpacity>
            <Text className="rounded-full h-12 w-12 bg-yellow-400">{props.text}</Text>
        </TouchableOpacity>
    )
}