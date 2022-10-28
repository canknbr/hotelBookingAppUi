import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../data/colors';
import hotels from '../data/hotels';
import CategoryList from '../components/CategoryList';
import Cards from '../components/Cards';
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Find your hotel
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{color: COLORS.primary, fontSize: 30, fontWeight: 'bold'}}>
              in
            </Text>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: 30,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              Istanbul
            </Text>
          </View>
        </View>
        <Icon name="notifications" size={38} color={COLORS.primary} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={30} color={COLORS.primary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={COLORS.primary}
            selectionColor={COLORS.primary}
          />
        </View>
        <CategoryList />
        <View>
          <FlatList
            data={hotels}
            keyExtractor={item => item.id}
            renderItem={({index, item}) => <Cards hotel={item} index={index} />}
            contentContainerStyle={{paddingVertical: 30, paddingLeft: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerLeft: {
    paddingBottom: 20,
  },
  searchInputContainer: {
    height: 60,
    backgroundColor: COLORS.light,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    fontSize: 20,
    color: COLORS.primary,
    paddingLeft: 20,
  },
});
export default HomeScreen;
