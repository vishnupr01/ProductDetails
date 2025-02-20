import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Animated,
} from "react-native";
import { useRef, useState } from "react";

type RootStackParamList = {
  SeeMoreScreen: undefined;
};

const { width } = Dimensions.get("window");

export const ProductScroller = ({ products }: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const scrollX = useRef(new Animated.Value(0)).current; // Animated value for scrolling
  const flatListRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Frequently Bought</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SeeMoreScreen")}>
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        ref={flatListRef}
        data={products}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()} // No ID in data
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <Image source={{ uri: item.images.primary }} style={styles.image} />
            <View style={{alignItems:"flex-start"}}>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>{item.discount}</Text>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.oldPrice}>${item.originalPrice}</Text>
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color="gold" />
              <Text style={styles.ratingText}>
                {item.rating.score} ({item.rating.totalReviews})
              </Text>
            </View>
            </View>
          </View>
        )}
      />

      {/* Scroll Indicator Bar */}
      <View style={{alignItems:"center"}}>
      <View style={styles.indicatorContainer}>
        <Animated.View
          style={[
            styles.indicatorBar,
            {
              width: scrollX.interpolate({
                inputRange: [0, width * (products.length - 1)],
                outputRange: ["20%", "100%"], // Adjust width dynamically
                extrapolate: "clamp",
              }),
            },
          ]}
        />
      </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeMore: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0d6d51",
    textDecorationLine: "underline",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    width: width * 0.4,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  discountBadge: {
    top: 10,
    left: 10,
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  discountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  name: {
    fontSize: 14,
    fontWeight: "300",
    marginTop: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "gray",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
  },
  // Scroll Indicator Bar
  indicatorContainer: {
    width: "20%",
    height: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    marginTop: 25,
    overflow: "hidden",
  },
  indicatorBar: {
    height: "100%",
    backgroundColor: "#0d6d51",
    borderRadius: 2,
  },
});

