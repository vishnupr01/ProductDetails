import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BestSellerTag: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.triangle} />
      <Text style={styles.text}>Best Seller</Text>
      <View style={styles.triangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:40,
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 4,
    position: "relative",
    alignSelf: "flex-start", // Ensures it wraps content
  },
  text: {
    color: "#fff",
    fontSize: 13,
    lineHeight: 26,
  },
  triangle: {
    position: "absolute",
    right: -8,
    top: 8,
    width: 2,
    height: 0,
    borderLeftWidth: 10,
    borderTopWidth: 10,
    borderBottomWidth: 15,
    borderLeftColor: "red",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
});

export default BestSellerTag;
