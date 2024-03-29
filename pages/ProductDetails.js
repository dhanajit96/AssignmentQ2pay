import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import Index from '../components/CarouselFile';
import { styles } from '../css/ProductDetailsStyle'
import RatingComponent from '../components/RatingComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ProductDetails = () => {
    const route = useRoute();
    const { itemId } = route.params;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Initial loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${itemId}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        setTimeout(() => {
            setIsLoading(false); // Turn off loading state
        }, 1000);

        fetchData();
    }, []);
    function calculateOriginalPrice(discountedPrice, discountPercentage) {
        // Calculate the original price
        const originalPrice = (discountedPrice * 100) / (100 - discountPercentage);
        // Round the result to two decimal place
        return Math.round(originalPrice * 100) / 100;
    }


    return (
        <View style={{ backgroundColor: '#fff4e2' }}>
            {
                typeof data !== 'undefined' && 
                data.length < 1 && 
                <Text>Sorry! Currenty Unable to fetch data</Text>
            }
            <View style={{ height: 350 }}>
                <Index images={data.images} />
                {isLoading &&
                    <ActivityIndicator style={styles.loading} size="large" color="#007AFF" />
                }
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{data?.title} | {data?.brand}</Text>
                <Text>
                    <RatingComponent rating={data?.rating?.toFixed(2)} />
                </Text>
                <Text style={styles.description}>{data?.description}</Text>
                <Text style={styles.price}>
                    Price: ${data?.price?.toFixed(2)}
                    &nbsp;<FontAwesome name="tags" size={12} color="green" />
                </Text>

                <Text style={styles.discount}>
                    <Text style={styles.originPrice}>MRP ${calculateOriginalPrice(data?.price, data?.discountPercentage)}
                    </Text>
                    &nbsp;<FontAwesome name="arrow-down" size={12} color="red" />
                    {data?.discountPercentage?.toFixed(2)}%
                </Text>

                <Text style={styles.stock}>Harry up! only {data?.stock} pieces avaliable </Text>
                <Text style={styles.extraDetailsHeader}>Additional Details</Text>
                <Text style={styles.brand}>Brand: {data?.brand}</Text>
                <Text style={styles.category}>Category: {data?.category}</Text>
            </View>
        </View>
    )
}

export default ProductDetails;