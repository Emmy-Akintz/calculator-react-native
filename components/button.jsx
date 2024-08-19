import { Text, TouchableOpacity } from "react-native"

const Button = ({ text, category, ...props }) => {
    if (category === 1) {
        return (
            <TouchableOpacity {...props} className="bg-[#697565] h-20 w-20 rounded-full flex justify-center items-center">
                <Text className="text-[#1E201E] font-semibold text-3xl">{text}</Text>
            </TouchableOpacity>
        )
    } else if (category === 2) {
        return (
            <TouchableOpacity {...props} className="bg-[#3C3D37] h-20 w-20 rounded-full flex justify-center items-center">
                <Text className="text-[#FFFFFF] font-semibold text-3xl">{text}</Text>
            </TouchableOpacity>
        )
    } else if (category === 3) {
        return (
            <TouchableOpacity {...props} className="bg-[#eab308] h-20 w-20 rounded-full flex justify-center items-center">
                <Text className="text-[#FFFFFF] font-semibold text-3xl">{text}</Text>
            </TouchableOpacity>
        )
    } else if (category === 4) {
        return (
            <TouchableOpacity {...props} className="bg-[#3C3D37] h-20 w-44 pl-8 rounded-full flex justify-center items-start">
                <Text className="text-[#FFFFFF] font-semibold text-3xl">{text}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;