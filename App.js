import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
// import Button from './components/button';
import { line1, line2, line3, line4, line5 } from './constants/data';
import { styles } from './styles/style';

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
  console.log({
    display,
    answer,
    num1,
    operator,
    num2
  });
  const handlePress = (val) => {
    const isNumber = !isNaN(val) || val === ".";
    let hasPreviousAnswer = answer !== "";
    let isOperator = !isNumber && val !== "=" && val !== "C" && val !== "DEL";

    if (isOperator && num1 === "") {
      isOperator = false;
      return;//to prevent operator input if there is no num1 just yet
    }

    if (isOperator && num1.length > 0 && num2.length > 0 && operator.length > 0 && answer.length === 0) {
      isOperator = false;
      return; //to prevent another operator when num1, operator and num2 has been supplied...
    }

    if (val === "C") {
      setDisplay([""]);
      setAnswer("");
      setNum1("");
      setOperator("");
      setNum2("");
      hasPreviousAnswer = false;
      return;
    }

    if (hasPreviousAnswer) {
      if (isOperator) {
        isOperator = false;
        setNum1(answer);
        setNum2("");
        setOperator(val);
        setAnswer("");
        setDisplay([answer, val]);
      } else if (isNumber) {
        setAnswer("");
        setDisplay([val]);
        setNum1(val);
        setNum2("");
      } else if (val === "DEL") {
        setNum1("");
        setNum2("");
        setOperator("");
        setAnswer("");
        setDisplay([""]);
      }
      hasPreviousAnswer = false;
      return;
    }

    if (isNumber && !operator) {
      setNum1(prevNum1 => (prevNum1 === "" ? val : prevNum1 + val));
      setDisplay(prevDisplay => [...prevDisplay, val]);
    } else if (isNumber && operator) {
      setNum2(prevNum2 => (prevNum2 === "" ? val : prevNum2 + val));
      setDisplay(prevDisplay => [...prevDisplay, val]);
    } else if (isOperator) {
      isOperator = false;
      const lastChar = display[display.length - 1];
      if (lastChar === val) {
        return;
      } else if ((lastChar === "%") || (lastChar === "/") || (lastChar === "*") || (lastChar === "-") || (lastChar === "+")) {
        setDisplay(prevDisplay => prevDisplay.length > 0 ? prevDisplay.slice(0, -1) : [""]);
        setOperator(val);
        setDisplay(prevDisplay => [...prevDisplay, val]);
      } else {
        setOperator(val);
        setDisplay(prevDisplay => [...prevDisplay, val]);
      }
    } else if (val === "DEL") {
      const lastChar = display[display.length - 1];
      if (lastChar === operator) {
        setOperator("");
      } else if (operator && lastChar !== operator) {
        setNum2(prevNum2 => prevNum2.slice(0, -1));
      } else if (!operator) {
        setNum1(prevNum1 => prevNum1.slice(0, -1));
      }
      setDisplay(prevDisplay => prevDisplay.length > 0 ? prevDisplay.slice(0, -1) : [""]);
    } else if (val === "=") {
      if (num1 && operator && num2) {
        const result = eval(num1 + operator + num2);
        setAnswer(result.toString());
      }
    } else {
      setDisplay(prevDisplay => [...prevDisplay, val]);
    };
  };

  return (
    <View style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <View className={`flex h-full ${Platform.OS === "android" ? 'w-screen' : 'w-full'} bg-[#1E201E]`}>
          <View className="w-full h-1/3 grid justify-end items-end p-4">
            <Text className="text-white opacity-50 text-5xl">{display.join("")}</Text>
            <Text className="text-white text-6xl">{answer}</Text>
          </View>
          <View className="w-full flex-1 grid gap-6 p-4">
            <View className="w-full flex flex-row justify-between">
              {line1.map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full flex flex-row justify-between">
              {line2.map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full flex flex-row justify-between">
              {line3.map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full flex flex-row justify-between">
              {line4.map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full flex flex-row justify-between">
              {line5.map((row, index) => (
                <Button key={index} text={row.text} category={row.category} onPress={() => handlePress(row.text)} />
              ))}
            </View>
            <View className="w-full"></View>
          </View>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

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