import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { numbers } from './constants/calculatorStructure';
import Button from './components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <View className="bg-black">
        <StatusBar style="light" />
        <View className="flex h-full w-screen">
          <View className="w-full h-1/3"></View>
          <View className="w-full flex-1 grid">
            <View className="h-fit w-full bg-red-400">
              {numbers.map((row, index) => (
                <Button key={index} text={row.text} />
              ))}
            </View>
            <View className=""></View>
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
