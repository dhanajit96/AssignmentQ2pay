import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Image } from 'react-native-elements';
import { styles } from '../css/ProductListStyle'
import Item from '../components/Item';

const ProductPage = () => {
  const [data, setData] = useState([]);

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

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return(
  <SafeAreaView style={styles.container}>
    {/* <Text style={styles.headerTitle}>Product Page</Text> */}
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  </SafeAreaView>
)};

export default ProductPage;
