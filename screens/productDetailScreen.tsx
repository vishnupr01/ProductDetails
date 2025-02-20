import { View,Text,StyleSheet,Share } from "react-native"
import BestSellerTag from "../components/BestSellerTag"
import ImageCarousel from "../components/ImageCarousel";
import { useEffect, useState } from "react";
import { fetchProductDetails } from "../api/productApi";
import { ProductTitle } from "../components/ProductTitle";
import { ScrollView } from "react-native-gesture-handler";
import ColorOptions from "../components/colorOptions";
import { ExpandableSection } from "../components/ExpandableSection";
import { ReviewExtension } from "../components/ReviewSection";
import { ProductScroller } from "../components/ProductScroller";
import StickyFooter from "../components/StickyFooter";

export const ProductDetailScreen=()=>{
  const [product,setProduct] = useState<any>(null)
  const [selectedVariant,setSelectedVariant] = useState<any>(null)
  useEffect(()=>{
    const loadData=async()=>{
      const data = await fetchProductDetails()
      setProduct(data.product)
      setSelectedVariant(data.product.variants[0])
    }
    loadData()
  },[])
  if(!product) return <Text>Loading...</Text>
  const handleColorChange=(colorName:string)=>{
    const variant= product.variants.find((v:any)=>v.name===colorName)
    setSelectedVariant(variant)
  }
  const shareProduct=async()=>{
    await Share.share({message:`check out this product:${product.name}`})
  }
  return(
    <ScrollView>
    <View style={styles.top} >
      
      {/* <BestSellerTag /> */}
      <ImageCarousel images={product.images.gallery}/>
      <ProductTitle product={product} variant={selectedVariant}/>
      <View style={styles.colorSection}>
          <Text style={styles.sectionTitle}>Colors</Text>
          <ColorOptions colors={product.variants} onSelectColor={handleColorChange}  />
        </View>
        <View>
          <ExpandableSection description ={product.description.long} dimensions={product.dimensions} imageSource={product.description.image} />
        </View>
        <ReviewExtension reviews={product.reviews.summary} reviewers={product.reviews.items} />
        <ProductScroller products={product.frequentlyBoughtWith}/>
       
        <StickyFooter />
        
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: { padding: 0 },
  title: { fontSize: 24, fontWeight: "bold" },
  price: { fontSize: 20, color: "green" },
  share: { color: "blue", marginTop: 10 },
  top:{backgroundColor:'white'},
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },
  colorSection: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc", 
    paddingVertical: 10,
    marginVertical: 10, 
  },
});