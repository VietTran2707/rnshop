//create Notification screen for the app

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  GLOBALS  from '../../constants/GLOBALS';
import Layout2 from '../../components/layout/Layout2';

const Notification = ({navigation}) => {
    
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
                </View>
            </TouchableOpacity>
        );
    }
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

});

