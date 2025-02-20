import React, { useState } from "react";
import { TouchableOpacity, Text, ActivityIndicator, Alert,Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const AddToCartButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", "Item added to cart!");
    }, 1500);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: "#0d6d51",
        paddingVertical:5,
        paddingHorizontal: width*0.28,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : <Text style={{ color: "white", fontSize: 16 }}>Add to Cart</Text>}
    </TouchableOpacity>
  );
};

export default AddToCartButton;
