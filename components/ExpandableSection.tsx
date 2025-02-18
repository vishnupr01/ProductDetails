import { useState } from 'react';
import { LayoutAnimation, Platform, UIManager, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ExpandableSectionProps } from '../interfaces/productDescription';

// Enable animation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const ExpandableSection = ({ description, dimensions, imageSource, isInitiallyExpanded = false }: ExpandableSectionProps) => {
  const [expanded, setExpanded] = useState(isInitiallyExpanded);
  const [sizeExpanded, setSizeExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const toggleSizeExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSizeExpanded(!sizeExpanded);
  };

  const dimensionList = Object.entries(dimensions).map(([key, value]) => ({ key, value }));

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.title}>Product Description</Text>
        <MaterialCommunityIcons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#333"
        />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.content}>
          <Text style={styles.text}>{description}</Text>

          <TouchableOpacity onPress={toggleSizeExpand} style={styles.header}>
            <Text style={styles.title}>Size</Text>
            <MaterialCommunityIcons
              name={sizeExpanded ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#333"
            />
          </TouchableOpacity>

          {sizeExpanded && (
            <View>
              {dimensionList.map((item) => (
                <View key={item.key} style={styles.dimensionItem}>
                  <Text style={styles.dimensionLabel}>{item.key}:</Text>
                  <Text style={styles.dimensionValue}>{item.value}</Text>
                </View>
              ))}

              {imageSource && (
                <View style={styles.imageContainer}>
                  <Image source={{ uri: imageSource.url }} style={styles.image} />
                </View>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  dimensionItem: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  dimensionLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  dimensionValue: {
    fontSize: 14,
  },
  imageContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default ExpandableSection;
