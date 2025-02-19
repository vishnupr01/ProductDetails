import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ReviewItem } from "./ReviewItem";

export const ReviewExtension = ({ reviews, reviewers }: any) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.tile}>Reviews</Text>
        <TouchableOpacity>
          <Text style={styles.addReview}>+Add Review</Text>
        </TouchableOpacity>
      </View>

      {/* Rating Overview */}
      <View style={styles.ratingOverview}>
        {/* Left: Average Rating with Total Reviews Below */}
        <View style={styles.avgRatingContainer}>
          <View style={styles.ratingRow}>
            <Text style={styles.specialContainer}>{reviews.averageRating}</Text>
            <MaterialCommunityIcons
              style={{ marginHorizontal: 8 }}
              name="star"
              size={40}
              color="#0d6d51"
            />
          </View>

          {/* Total Reviews */}
          <View style={styles.reviewCountContainer}>
            <Text style={styles.reviewCount}>{reviews.totalReviews} reviews</Text>
          </View>
        </View>

        {/* Right: Rating Breakdown */}
        <View style={styles.ratingBreakdown}>
          {reviews.distribution &&
            Object.keys(reviews.distribution)
              .reverse()
              .map((star) => (
                <View key={star} style={styles.breakdownRow}>
                  <Text style={styles.starText}>{star}</Text>
                  <MaterialCommunityIcons name="star" size={16} color="#0d6d51" />
                  <View style={styles.progressBarContainer}>
                    <View
                      style={[
                        styles.progressBar,
                        {
                          width: reviews.distribution[star]
                            ? `${(reviews.distribution[star] / reviews.totalReviews) * 100}%`
                            : "0%",
                        },
                      ]}
                    />
                  </View>
                </View>
              ))}
        </View>
      </View>
      {reviewers.map((item: any, index: number) => (
        <View key={index}> 
          <ReviewItem review={item} />
        </View>
      ))}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 10,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  tile: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addReview: {
    color: "#0d6d51",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  ratingOverview: {
    flexDirection: "row", // Arrange rating and breakdown side by side
  },
  avgRatingContainer: {
    alignItems: "center", // Align rating and total reviews in center
    justifyContent: "center",
    marginRight: 20, // Space from rating breakdown
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  specialContainer: {
    fontSize: 27,
    fontWeight: "bold",
  },
  reviewCountContainer: {
    backgroundColor: "#000",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 5,
    marginLeft: -10,
  },
  reviewCount: {
    color: "#fff",
    fontSize: 12,
  },
  ratingBreakdown: {
    flex: 1, // Take remaining space
  },
  breakdownRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  starText: {
    fontSize: 14,
    marginRight: 5,
  },
  progressBarContainer: {
    flex: 1,
    height: 5,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginLeft: 10,
  },
  progressBar: {
    height: 5,
    backgroundColor: "#0d6d51",
    borderRadius: 5,
  },
});

