import { View, Text, StyleSheet } from "react-native";
import { ProductTitleProps } from "../interfaces/productDescription";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const ProductTitle = ({ product }: ProductTitleProps) => {
  return (
    <View>
      <View style={{justifyContent:"space-between",flexDirection:"row"}}>
      <Text style={[styles.marginSet, styles.titleFont]}>{product.name}</Text>
      <Feather name="share" size={22} color="black" style={{marginRight:10,paddingTop:5}} />
                    </View>
      <View style={[styles.marginSet, styles.priceContainer]}>
        <Text style={styles.prizeFont}>${product.price.current.toFixed(2)} </Text>
        {product.price.discount && (
          <Text style={styles.offerPriceFont}>${product.price.original.toFixed(2)} </Text>
        )}
        {product.price.discount && (
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{product.price.discount}</Text>
          </View>
        )}
      </View>
      <View style={{flexDirection:"row"}}>
            <MaterialCommunityIcons
                      style={{ marginHorizontal: 8 }}
                      name="star"
                      size={20}
                      color="#f4a900"
                    />
        <Text>{product.rating.score}({product.rating.totalReviews})</Text>

      </View>
      <View>
        <Text style={[styles.descriptionFont,styles.marginSet]}>
          {product.description.short}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginSet: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  titleFont: {
    fontSize: 24,
    fontWeight: "400",
    fontFamily: "Manrope-Light",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  prizeFont: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Manrope-Bold",
  },
  offerPriceFont: {
    fontSize: 19,
    fontWeight: "400",
    fontFamily: "Manrope-Bold",
    textDecorationLine: "line-through",
    color: "gray",
    marginLeft: 5,
  },
  discountTag: {
    backgroundColor: "red",  // Tag background color
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginLeft: 8,
  },
  discountText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white", // Text color inside tag
  },
  descriptionFont:{
    fontSize:19,
    fontWeight:"thin",
    fontFamily:"Manrope-light"
  }
});
