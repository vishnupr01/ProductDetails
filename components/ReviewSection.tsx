import { View, Text, StyleSheet, TouchableOpacity, FlatList,
  TextInput,Modal,Alert
 } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ReviewItem } from "./ReviewItem";
import { useState } from "react";

export const ReviewExtension = ({ reviews, reviewers }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [reviewDetails, setReviewDetails] = useState("");

  const handleSubmit = () => {
    if (!name || !email || rating === 0 || !reviewDetails) {
      Alert.alert("Error", "Please fill all fields and select a rating.");
      return;
    }
    
    setModalVisible(false);
    Alert.alert("Success", "Your review has been submitted!");
    setName("");
    setEmail("");
    setRating(0);
    setReviewDetails("");
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.tile}>Reviews</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
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
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a Review</Text>

            <TextInput
              style={styles.input}
              placeholder="Your Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Your Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Select Rating</Text>
            <View style={styles.ratingSelector}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                  <MaterialCommunityIcons
                    name={star <= rating ? "star" : "star-outline"}
                    size={30}
                    color="#0d6d51"
                  />
                </TouchableOpacity>
              ))}
            </View>

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Write your review"
              multiline
              value={reviewDetails}
              onChangeText={setReviewDetails}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ratingSelector: {
    flexDirection: "row",
    marginBottom: 15,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "45%",
  },
  submitButton: {
    backgroundColor: "#0d6d51",
  },
  cancelButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

