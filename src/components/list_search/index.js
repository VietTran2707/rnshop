import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import GLOBALS from '../../constants/GLOBALS';
import productApi from '../../api/productApi';
import Feather from 'react-native-vector-icons/Feather'

const ListSearch = () => {
    const navigation = useNavigation()

    const [listData, setListData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await productApi.getAllProduct()
                setListData(res)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

    const ColItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={[styles.container, {
                    marginLeft: index % 2 === 0 ? 3 : 0,
                    marginRight: index % 2 === 0 ? 20 : 3,
                }]}
                onPress={() => navigation.navigate('Product', { id: item.id })}
            >
                <View style={styles.containerImage}>
                    <Image source={{ uri: item.image }} style={styles.image} resizeMode='stretch' />
                </View>
                <View style={styles.content}>
                    <View style={{ flex: 0.7 }}>
                        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'space-around' }}>
                        <TouchableWithoutFeedback>
                            <Ionicon
                                name={item.isLiked ? 'heart' : 'heart-outline'}
                                size={22}
                                color={item.isLiked ? 'red' : 'black'}
                            />
                        </TouchableWithoutFeedback>
                        <Feather name='shopping-bag' size={20} color='black' />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        listData &&
        <FlatList
            data={listData}
            style={{ marginTop: 10, marginHorizontal: 20 }}
            columnWrapperStyle={{
                flex: 1,
                justifyContent: "space-between"
            }}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={ColItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default ListSearch;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 20,
        elevation: 3,
        backgroundColor: 'white'
    },

    containerImage: {
        alignItems: 'center',
        backgroundColor: 'white',
    },

    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },

    content: {
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row'
    },

    title: {
        fontSize: 17,
        color: GLOBALS.COLOR.PrimaryText,
        paddingBottom: 3,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },

    price: {
        marginVertical: 3,
        color: 'red'
    },

})