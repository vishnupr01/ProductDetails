import { View,Text,StyleSheet,Share } from "react-native"
import BestSellerTag from "../components/BestSellerTag"
import ImageCarousel from "../components/ImageCarousel";
import { useEffect, useState } from "react";
import { fetchProductDetails } from "../api/productApi";

export const ProductDetailScreen=()=>{
  const [product,setProduct] = useState<any>(null)
  useEffect(()=>{
    const loadData=async()=>{
      const data = await fetchProductDetails()
      setProduct(data.product)
    }
    loadData()
  },[])
  if(!product) return <Text>Loading...</Text>
  const shareProduct=async()=>{
    await Share.share({message:`check out this product:${product.name}`})
  }
  return(
    <View style={styles.top} >
      
      <BestSellerTag />
    
      <ImageCarousel images={product.images.gallery}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { padding: 0 },
  title: { fontSize: 24, fontWeight: "bold" },
  price: { fontSize: 20, color: "green" },
  share: { color: "blue", marginTop: 10 },
  top:{marginVertical:-10,backgroundColor:'white'}
});