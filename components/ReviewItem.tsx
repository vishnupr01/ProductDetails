import { Text, View,StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const screenWidth = Dimensions.get("window").width;
export const ReviewItem = ({ review }:any) => {

  return (
    <View style={styles.reviewItem}>
      <View style={styles.userIcon}>
        <Text style={styles.userInitial}>{review.author.name[0]}</Text>
      </View>
      <View style={styles.reviewContent}>
        <View>
        <Text style={styles.userName}>{review.author.name}</Text>
        <Text style={styles.reviewText}>{review.content}</Text>
        </View>
        <View style={styles.starRow}>
          <Text>
          {Array.from({ length: 5 }).map((_, index) => (
            <MaterialCommunityIcons
              key={index}
              name={index < review.rating ? 'star' : 'star-outline'}
              size={16}
              color={index < review.rating ? '#f4a900' : '#ccc'}
            />
          ))}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles= StyleSheet.create({
  reviewItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0d6d51',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  userInitial: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewContent: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between'

  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 12,
    color: '#555',
    width: screenWidth*0.5, // Adjust width to fit screen size

  },
  starRow: {
    flexDirection: 'row',
    marginTop: 5,
  }

})
