//create Notification screen for the app

import React, {useEffect, useState} from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  GLOBALS  from '../../constants/GLOBALS';
import Layout2 from '../../components/layout/Layout2';

const Notification = ({navigation}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await productApi.getNotification();
                setData(res);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);
    
    const NotiItem = ({item}) => {
        return (
            <TouchableOpacity 
                style={styles.NotiContainer}
                onPress = {() => navigation.navigate('Notification', {id : item.id})}
            >
                <View style={{flex: 0.3}}>
                    <Image source={{uri: item.image}} style={styles.image} resideMode = 'stretch' />
                </View>
                <View style={{flex: 0.7, backgroundColor: 'white', flexDirection: 'row'}}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <Layout2 title='Notification' showBack={true}>
            <FlatList
                style={{marginHorizontal: 20, marginTop: 20}}
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
   NotiContainer: {
        backgroundColor: GLOBALS.COLOR.PrimaryBackground,
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 5,
        overflow: 'hidden',
        elevation: 3,
    },
    image: {
        width: '101%',
        height: '101%',
        backgroundColor: 'white',
        height: undefined,
        aspectRatio: 1,
    },
    title: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 5,
        color: GLOBALS.COLOR.PrimaryText,
    },
});

