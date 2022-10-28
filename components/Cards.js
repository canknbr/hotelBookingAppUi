import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import COLORS from '../data/colors';
const cardWidth = Dimensions.get('screen').width / 1.8;
const Cards = ({hotel, index}) => {
  return (
    <View style={[styles.card, {}]}>
      <View style={styles.priceTag}>
        <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
          ${hotel.price}
        </Text>
      </View>
      <Image source={hotel.image} style={styles.cardImage} />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    height: 200,
    width: cardWidth,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: COLORS.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Cards;
