import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// const colors = {
//   black: "#1E201E",
//   darkGrey: "#3C3D37",
//   lightGrey: "#697565",
//   yellow: "#eab308",
//   white: "#FFFFFF"
// }

export default function App() {
  const [display, setDisplay] = useState([""]);
  const [answer, setAnswer] = useState("");
  const [num1, setNum1] = useState("");
  const [operator, setOperator] = useState("");
  const [num2, setNum2] = useState("");
  const handlePress = (val, operator) => {
    if (val === "C") {
      setDisplay([""]);
    } else if (val === "DEL") {
      // setDisplay(prevDisplay => [])
    } else if (val === "=") {
      if (num1 && operator && num2) {
        setAnswer(eval(num1+operator+num2));
      }
      // setDisplay([...display, val]);
    } else {
      setDisplay(prevDisplay => [...prevDisplay, val]);
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <View className="flex h-full w-screen bg-[#1E201E]">
          <View className="w-full h-1/3 grid justify-end items-end p-4">
            <Text className="text-white opacity-50 text-5xl">{display.join("")}</Text>
            <Text className="text-white text-6xl">{answer}</Text>
          </View>
          <View className="w-full flex-1 grid gap-6 p-4">
            <View className="w-full flex flex-row justify-between">
              {[
                {
                  text: "C",
                  category: 1,
                  type: "command"
                },
                {
                  text: "DEL",
                  category: 1,
                  type: "command"
                },
                {
                  text: "%",
                  category: 1,
                  type: "operator"
                },
                {
                  text: "/",
                  category: 3,
                  type: "operator"
                },
              ].map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full flex flex-row justify-between">
              {[
                {
                  text: "7",
                  category: 2,
                  type: "number"
                },
                {
                  text: "8",
                  category: 2,
                  type: "number"
                },
                {
                  text: "9",
                  category: 2,
                  type: "number"
                },
                {
                  text: "*",
                  category: 3,
                  type: "operator"
                },
              ].map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full flex flex-row justify-between">
              {[
                {
                  text: "4",
                  category: 2,
                  type: "number"
                },
                {
                  text: "5",
                  category: 2,
                  type: "number"
                },
                {
                  text: "6",
                  category: 2,
                  type: "number"
                },
                {
                  text: "-",
                  category: 3,
                  type: "operator"
                },
              ].map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full flex flex-row justify-between">
              {[
                {
                  text: "1",
                  category: 2,
                  type: "number"
                },
                {
                  text: "2",
                  category: 2,
                  type: "number"
                },
                {
                  text: "3",
                  category: 2,
                  type: "number"
                },
                {
                  text: "+",
                  category: 3,
                  type: "operator"
                },
              ].map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full flex flex-row justify-between">
              {[
                {
                  text: "0",
                  category: 4
                },
                {
                  text: ".",
                  category: 2
                },
                {
                  text: "=",
                  category: 3
                },
              ].map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full"></View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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