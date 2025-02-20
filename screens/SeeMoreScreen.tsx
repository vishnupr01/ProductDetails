import { View, Text, StyleSheet } from "react-native";

export default function SeeMoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a blank page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});
