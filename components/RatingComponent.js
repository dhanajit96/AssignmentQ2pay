import React from 'react';
import { View, Text } from 'react-native';
import StarRating from 'react-native-star-rating';

const RatingComponent = ({ rating }) => (
  <View style={{ width: "50%"}}>
    <StarRating
      disabled={true}
      maxStars={5}
      rating={rating}
      starSize={15}
      fullStarColor={'gold'}
      emptyStarColor={'grey'}
    />
  </View>
);

export default RatingComponent;
