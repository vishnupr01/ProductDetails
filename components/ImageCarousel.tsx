import { ScrollView } from "react-native-gesture-handler";
import { Image, StyleSheet, View, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { useRef, useState } from "react";

// Get the screen width dynamically
const { width } = Dimensions.get("window");

const ImageCarousel = ({ images }: { images: { url: string }[] }) => {
  const [selectedIndex,setSelectedIndex] = useState(0)
  const scrollViewRef = useRef<ScrollView>(null)
  const scrollToImage=(index:number)=>{
    setSelectedIndex(index)
    scrollViewRef.current?.scrollTo({x:width*index,animated:true})
  }
  return (
    <View >
    <ScrollView
    ref={scrollViewRef}
      style={styles.box}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(event)=>{
        const newIndex = Math.round(event.nativeEvent.contentOffset.x/width)
        setSelectedIndex(newIndex)
      }}
    >
      {images.map((img, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={{ uri: img.url }} style={styles.image} />
        </View>
      ))}
    </ScrollView>

    <FlatList
    style={{marginHorizontal:width*0.15,marginVertical:-10}}
    data={images}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item,index)=>index.toString()}
    renderItem={({item,index})=>(
      <TouchableOpacity onPress={()=>scrollToImage(index)}>
          <Image source={{uri:item.url}}
          style={[styles.thumbnail,index===selectedIndex&&styles.selectedThumbnail]}/>
      </TouchableOpacity>
    )}>

    </FlatList>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  imageContainer: {
    width, // Full width of the screen
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width ,  // 90% of screen width
    height: width,  // Maintain square aspect ratio
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
