import { ScrollView } from "react-native-gesture-handler";
import { Image, StyleSheet, View, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { useRef, useState } from "react";
import BestSellerTag from "./BestSellerTag";

// Get the screen width dynamically
const { width } = Dimensions.get("window");

const ImageCarousel = ({ images }: { images: { url: string }[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToImage = (index: number) => {
    setSelectedIndex(index);
    scrollViewRef.current?.scrollTo({ x: width * index, animated: true });
  };

  return (
    <View style={styles.carouselContainer}>
      {/* BestSellerTag remains fixed and does not scroll */}
      <View style={styles.tagContainer}>
        <BestSellerTag />
      </View>

      {/* Scrollable Image Carousel */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.box}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setSelectedIndex(newIndex);
        }}
      >
        {images.map((img, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: img.url }} style={styles.image} />
          </View>
        ))}
      </ScrollView>

      {/* Thumbnail Navigation */}
      <FlatList
        style={{ marginHorizontal: width * 0.20, marginVertical: -10 }}
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => scrollToImage(index)}>
            <Image source={{ uri: item.url }} style={[styles.thumbnail, index === selectedIndex && styles.selectedThumbnail]} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative", // Needed for absolute positioning of BestSellerTag
    alignItems: "center",
  },
  tagContainer: {
    position: "absolute",
    top: 20, // Adjust vertical position
    left: 10, // Align to left
    zIndex: 10, // Ensure it's above the image
  },
  imageContainer: {
    width, // Full width of the screen
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width, // Full width
    height: width, // Maintain square aspect ratio
    resizeMode: "contain",
  },
  box: {
    marginVertical: 10,
  },
  thumbnail: {
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 5,
  },
  selectedThumbnail: {
    borderWidth: 2,
    borderColor: "darkgreen",
  },
});
