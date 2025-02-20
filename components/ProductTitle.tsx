import { View, Text, StyleSheet, Share } from "react-native";
import { ProductTitleProps } from "../interfaces/productDescription";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import FlashMessage, { showMessage } from "react-native-flash-message";

export const ProductTitle = ({ product,variant }: ProductTitleProps) => {
  const onShare=async()=>{
    try {
      const result = await Share.share({
        title:product.name,
        message:`Check out this product: ${product.name} for only $${product.price.current.toFixed(2)}!`,
        url:"https://checkproduct/product"
      })
      if(result.action===Share.sharedAction){
        showMessage({
          message: "Success!",
          description: "Your action was successful.",
          type: "success",
        })
      }else if(result.action===Share.dismissedAction){
        showMessage({
          message: "Cancelled!",
          description: "Your action was cancelled.",
          type: "warning",  // Use "warning" for cancel actions
        })
      }
    } catch (error) {
      showMessage({
        message: "Error!",
        description: "Something went wrong.",
        type: "danger",  // Use "danger" for errors
      });
      
    }
  }
  return (
    <View>
      <View style={{justifyContent:"space-between",flexDirection:"row"}}>
      <Text style={[styles.marginSet, styles.titleFont]}>{product.name}</Text>
      <Feather name="share" onPress={onShare} size={22} color="black" style={{marginRight:10,paddingTop:5}} />
                    </View>
      <View style={[styles.marginSet, styles.priceContainer]}>
        <Text style={styles.prizeFont}>${variant?variant.price.current.toFixed(2):product.price.current.toFixed(2)} </Text>
        {product.price.discount && (
          <Text style={styles.offerPriceFont}>${variant?variant.price.original.toFixed(2):product.price.original.toFixed(2)} </Text>
        )}
        {product.price.discount && (
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{variant?variant.price.discount:product.price.discount}</Text>
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
