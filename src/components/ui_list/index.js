import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { images } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import productApi from '../../api/productApi'

const UIList = ({ title }) => {
    const navigation = useNavigation()
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await productApi.getProductCategory('Sofas')
                setData(res)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {data?.map(item => (
                <TouchableOpacity
                    key={item.id}
                    style={styles.offerContainer}
                    onPress={() => navigation.navigate('Product', { id: item.id })}
                >
                    <View style={styles.offerDetails}>
                        <View
                            style={[styles.imageContainer, { backgroundColor: item.color }]}>
                            <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain' />
                        </View>
                        <View style={styles.itemDetails}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.category}>{item.category}</Text>
                        </View>
                    </View>
                    <Text style={styles.price}>${item.price}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default UIList;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: 'black',
        marginBottom: 25,
    },
    offerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    price: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    },
    offerDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 77,
        height: undefined,
        aspectRatio: 1,
    },
    imageContainer: {
        paddingVertical: 0,
        borderRadius: 10,
        overflow: 'hidden'
    },
    itemDetails: {
        marginLeft: 10,
    },
    name: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    },
    category: {
        fontSize: 12,
        color: '#ACB1BE',
        fontWeight: '500',
    },
});