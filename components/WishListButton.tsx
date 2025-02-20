import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const WishlistButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setIsFavorite(!isFavorite)}
      style={{
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: isFavorite ? "red" : "black",
      }}
    >
      <FontAwesome name="heart" size={24} color={isFavorite ? "red" : "gray"} />
    </TouchableOpacity>
  );
};

export default WishlistButton;
