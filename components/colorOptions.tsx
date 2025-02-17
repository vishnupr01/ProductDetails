import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

interface ColorOptionsProps {
  colors: { name: string; colorCode: string }[];
}

const ColorOptions = ({ colors }: ColorOptionsProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {/* ✅ First Row */}
      <View style={styles.row}>
        {colors.slice(0, 2).map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorBox,
              selectedColor === color.name && styles.selectedBorder,
            ]}
            onPress={() => setSelectedColor(color.name)}
          >
            {/* Small colored square inside */}
            <View style={[styles.smallBox, { backgroundColor: color.colorCode }]} />
            <Text style={styles.colorText}>{color.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ✅ Second Row */}
      <View style={styles.row}>
        {colors.slice(2).map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorBox,
              selectedColor === color.name && styles.selectedBorder,
            ]}
            onPress={() => setSelectedColor(color.name)}
          >
            {/* Small colored square inside */}
            <View style={[styles.smallBox, { backgroundColor: color.colorCode }]} />
            <Text style={styles.colorText}>{color.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  colorBox: {
    width: "48%",
    height: 50,
    borderRadius: 8,
    flexDirection: "row", // Arrange small square and text side by side
    alignItems: "center",

    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white", // Keep the main box white
    paddingHorizontal: 10,
  },
  selectedBorder: {
    borderColor: "darkgreen",
    borderWidth: 2,
  },
  colorText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginLeft: 8, // Add spacing between square and text
  },
  smallBox: {
    width: 35,
    height: 35,
    borderRadius: 4,
  },
});

export default ColorOptions;
