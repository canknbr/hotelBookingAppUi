import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];
import COLORS from '../data/colors';

const CategoryList = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const handlePress = index => {
    setSelectedCategoryIndex(index);
  };
  return (
    <View style={styles.categoryListContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          onPress={() => handlePress(index)}>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.categoryText,
                {
                  color:
                    selectedCategoryIndex === index
                      ? COLORS.primary
                      : COLORS.grey,
                },
              ]}>
              {category}
            </Text>
            <View
              style={{
                width: '100%',
                height: 2,
                marginTop: 5,
                backgroundColor:
                  selectedCategoryIndex === index
                    ? COLORS.primary
                    : COLORS.white,
              }}></View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },

  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default CategoryList;
