import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { styles } from '../css/ProductListStyle'
import Item from '../components/Item';

const ProductPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    setTimeout(() => {
      setIsLoading(false); // Turn off loading state
    }, 1000);

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.headerTitle}>Product Page</Text> */}
      {isLoading &&
        <ActivityIndicator style={styles.loading} size="large" color="#007AFF" />
      }
      {
        typeof data !== 'undefined' && data.length < 1 && <Text>Sorry! Currenty Unable to fetch data</Text>
      }
      <View></View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
};

export default ProductPage;
