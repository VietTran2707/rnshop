import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GLOBALS from '../../constants/GLOBALS';
import { useSelector } from 'react-redux';

const Navbar = ({ title, showBack = false }) => {
    const navigation = useNavigation();
    const quantity = useSelector(state => state.cart.quantity)

    return (
        <View style={styles.navBar}>
            {showBack ? (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name='keyboard-backspace' size={35} color='black' />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity>
                    <Image
                        source={icons.menu}
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
                style={styles.cart}
                onPress={() => navigation.navigate('Cart')}
            >
                <MaterialIcons name='shopping-bag' size={30} color='black' />
                {
                    quantity > 0 &&
                    <Text style={styles.quantity}>{quantity}</Text>
                }
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    menuIcon: {
        width: 25,
        height: 12,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
    },
    cart: {
        position: 'relative'
    },
    quantity: {
        position: 'absolute',
        right: -5,
        top: 0,
        backgroundColor: 'red',
        paddingHorizontal: 5,
        borderRadius: 50,
        fontSize: GLOBALS.FONT.h6,
        color: GLOBALS.COLOR.PrimaryText
    }
});

export default Navbar;