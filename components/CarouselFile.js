import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Image } from 'react-native-elements';

const Index = ({ images }) => {
    const carouselRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item, index }) => (
        <View
            style={styles.renderItemView}>

            <Image style={styles.imageStyle} source={{ uri: item }} />

        </View>
    );

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.carousel}>
                <Carousel
                    layout="default"
                    ref={carouselRef}
                    data={images}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
            </View>
        </SafeAreaView>
    );
};

export default Index;
const styles = StyleSheet.create({
    renderItemView: {
        backgroundColor: '#e2fffa',
        borderRadius: 5,
        height: 300,
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    imageStyle: { width: "100%", height: "100%" },
    carousel: {
        flex: 1, flexDirection: 'row', justifyContent: 'center'
    },
    safeAreaView: { flex: 1, backgroundColor: '#e2fffa', paddingTop: 20 }
})