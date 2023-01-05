import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout2 from '../../components/layout/Layout2';
import GLOBALS from '../../constants/GLOBALS';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import productApi from '../../api/productApi';


const WhishList = ({ navigation }) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await productApi.getWhishList()
                setData(res)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    })

    const WhishItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.whishContainer}
                onPress={() => navigation.navigate('Product', { id: item.id })}
            >
                <View style={{ flex: 0.3 }}>
                    <Image source={{ uri: item.image }} style={styles.image} resizeMode='stretch' />
                </View>
                <View style={{ flex: 0.7, backgroundColor: 'white', flexDirection: 'row' }}>
                    <View style={{ flex: 0.7, justifyContent: 'center', padding: 20 }}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{item.name}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Ionicon
                            name='heart'
                            size={24}
                            color='red'
                            style={styles.heartIcon}
                        />
                        <Feather name='shopping-bag' size={24} color='black' />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        data &&
        <Layout2 title='Whish List' showBack={true}>
            <FlatList
                style={{ marginHorizontal: 20, marginTop: 20 }}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={WhishItem}
                keyExtractor={item => item.id}
            />
        </Layout2>
    );
};

export default WhishList;

const styles = StyleSheet.create({
    whishContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 3,
        marginHorizontal: 5
    },
    image: {
        width: '101%',
        backgroundColor: 'white',
        height: undefined,
        aspectRatio: 1,
    },
    title: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 5,
        color: GLOBALS.COLOR.PrimaryText,
        fontSize: 20
    },
    price: {
        marginTop: 5,
        color: 'red',
        fontSize: 18
    },

})