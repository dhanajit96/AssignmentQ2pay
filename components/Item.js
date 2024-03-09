import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { styles } from '../css/ProductListStyle'
import RatingComponent from './RatingComponent'
import { useNavigation } from '@react-navigation/native';

const Item = ({ item }) => {
  const navigation = useNavigation();

  const navigateToNextPage = () => {
    navigation.navigate('ProductDetails', { itemId: item.id });
  };

  return (
    <TouchableOpacity onPress={navigateToNextPage}>
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.thumbnail }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <RatingComponent rating={item.rating} />
          <Text style={styles.subtitle}>{item.description}</Text>
          <Text style={{}}>$ {item.price} ({item.discountPercentage}% off)</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};


export default Item;
