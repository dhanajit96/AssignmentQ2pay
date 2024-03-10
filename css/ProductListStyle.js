import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        backgroundColor: "#e2e3ff",
        borderBlockColor: "black",
        borderWidth: 2
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
    headerTitle:{
        fontSize: 25,
        padding: 3
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff4e2',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10
    },
    imageContainer: {
        marginRight: 10,
      
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 15,
    },
    subtitle: {
        fontSize: 12,
    },
});
