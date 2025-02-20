import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestSellerTag: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ribbon}>
        <Text style={styles.text}>Best Seller</Text>
      </View>
      <View style={styles.ribbonTriangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ribbon: {
    backgroundColor: '#ce2029', // Red background
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ribbonTriangle: {
    position: 'absolute',
    left: 80, // Move it to the left
    top: '30%',
    transform: [{ translateY: -5 }],
    width: 0,
    height: 0,
    borderRightWidth: 10, // Flip the direction
    borderRightColor: 'transparent',
    borderTopWidth: 10,
    borderTopColor: '#E91E63',
    borderBottomWidth: 10,
    borderBottomColor: '#E91E63',
  },
});

export default BestSellerTag;
