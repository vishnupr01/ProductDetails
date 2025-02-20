import React from "react";
import { View, StyleSheet } from "react-native";
import WishlistButton from "./WishListButton";
import AddToCartButton from "./AddToCartButton";


const StickyFooter: React.FC = () => {
  return (
    <View style={styles.footer}>
      <WishlistButton />
      <AddToCartButton />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop:40,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});

export default StickyFooter;
