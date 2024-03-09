// styles.js (External CSS file)
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        height: "100%",
        backgroundColor: '#f7edfa',
        marginTop: 5
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },      
    originPrice: {
        color: "grey",
        textDecorationLine: 'line-through'
    },
    thumbnail: {
        width: "80%",
        height: "80%",
        marginBottom: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 12,
    },
    price: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 16,
    },
    discount: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 16,
    },
    rating: {
        fontSize: 14,
    },
    stock: {
        fontSize: 14,
    },
    brand: {
        fontSize: 14,
    },
    category: {
        fontSize: 14,
    },
});
