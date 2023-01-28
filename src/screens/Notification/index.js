import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout2 from '../../components/layout/Layout2';
import GLOBALS from '../../constants/GLOBALS';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import productApi from '../../api/productApi';
import { color } from 'react-native-reanimated';


const Notification = ({ navigation }) => {

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


    const NotiItem = ({ item }) => {

        let detail = ''
        switch (item.status){
            case 'delivering':
                detail = 'This product is delivering to you soon'
                break;
            case 'delivered':
                detail = 'This product has been delivered successfully'
                break;
            case 'canceled':
                detail = 'This order has been canceled'
                break;
            default:
                detail = ''
                break;
        }

        return (
            <TouchableOpacity
                style={styles.notiContainer}
                onPress={() => navigation.navigate('HistoryDetail', { item, id: item.id })}
            >
                <View style={{ flex: 0.3 }}>
                    <View style={{ flex: 0.2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: item.image }} style={styles.image} resizeMode='center' />
                    </View>
                    <View style={{ flex: 0.8, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: GLOBALS.COLOR.PrimaryText, fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                </View>
                <View style={{ flex: 0.7, backgroundColor: 'white', flexDirection: 'column' }}>
                    <View style={{ padding: 5 }}>
                        <Text numberOfLines={0} style={styles.status}>{item.status}</Text>
                    </View>
                    <View>
                        <Text style={styles.detail}> <Text style={{color: 'green'}}> [{item.name}]</Text> {detail}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        data &&
        <Layout2 title='Notification' showBack={true}>
            <FlatList
                style={{ marginHorizontal: 20, marginTop: 20 }}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={NotiItem}
                keyExtractor={item => item.id}
            />
        </Layout2>
    );
};

export default Notification;

const styles = StyleSheet.create({
    notiContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        borderRadius: 0,
        overflow: 'hidden',
        elevation: 3,
    },
    image: {
        width: '101%',
        backgroundColor: 'white',
        height: undefined,
        aspectRatio: 1,
    },
    status: {
        paddingBottom: 5,
        color: GLOBALS.COLOR.PrimaryText,
        fontSize: 20,
        fontWeight: 'bold',
    },
    detail: {
        color: GLOBALS.COLOR.PrimaryText,
        fontSize: 17,
    },

})