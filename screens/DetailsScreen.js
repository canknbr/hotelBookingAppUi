import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../data/colors';
import {useNavigation, useRoute} from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {hotel} = route.params;

  return (
    <SafeAreaView>
      <Text>DetailsScreen</Text>
    </SafeAreaView>
  );
};

export default DetailsScreen;
