import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useForm } from 'react-hook-form';
import React, { useEffect, useReducer, useState } from "react";
import Layout2 from '../../components/layout/Layout2';
import GLOBALS from "../../constants/GLOBALS";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import UIButton from "../../components/button/UIButton";
import ValidInput from "../../components/input/ValidInput"
import { useSelector } from "react-redux";

const Payment = ({ route, navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm()
    const { items, total, type } = route.params
    /**
     * items: list items truyền từ cart
     * total: tổng tiền 
     * type: loại 
     * 0: Cart
     * 1: Product
     */
    const cart = useSelector(state => state.cart)

    const initialState = {
        listItems: null,
        lastTotal: null
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_PAYMENT':
                return {
                    listItems: action.payload.listItems,
                    lastTotal: action.payload.lastTotal
                }

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const [showShipping, setShowShipping] = useState(true)

    useEffect(() => {
        switch (type) {
            case 0:
                dispatch({
                    type: 'SET_PAYMENT',
                    payload: {
                        listItems: cart.listItems,
                        lastTotal: cart.total
                    }
                })
                break;

            default:
                dispatch({
                    type: 'SET_PAYMENT',
                    payload: {
                        listItems: items,
                        lastTotal: total
                    }
                })
                break;
        }
    }, [])

    const handlePayment = (data) => {
        console.log(data);
        navigation.navigate('PaymentFailed')
    }

    return (
        <Layout2 title='Payment' showBack>
            <View style={{ flex: 1, marginTop: 20 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginHorizontal: 20 }}
                >
                    <View style={styles.orderContainer}>
                        <Text style={styles.orderText}>My Order</Text>
                        <Text style={styles.orderText}>${state.lastTotal}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        {
                            state.listItems?.map(item => (
                                <View style={styles.flex}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.textItem}>{item.name}</Text>
                                    <Text style={styles.textItem}>{`${item.quantity} x $${item.price}`}</Text>
                                </View>
                            ))
                        }
                        <View style={styles.flex}>
                            <Text style={styles.textItem}>Discount</Text>
                            <Text style={styles.textItem}>- 0</Text>
                        </View>
                        <View style={styles.flex}>
                            <Text style={styles.textItem}>Delivery</Text>
                            <Text style={styles.textDelivery}>Free</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.orderContainer} onPress={() => setShowShipping(!showShipping)}>
                        <Text style={styles.orderText}>Shipping Detail</Text>
                        <FontAwesome5 name={showShipping ? 'angle-up' : 'angle-down'} size={20} color={GLOBALS.COLOR.PrimaryText} />
                    </TouchableOpacity>
                    <View style={[styles.shippingContainer, { display: showShipping ? 'flex' : 'none' }]}>
                        <ValidInput placeholder='Address' value='445 Nguyễn Trãi' name={'address'} control={control} />
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <UIButton title="Confirm Order" mt onPress={handleSubmit(handlePayment)} />
                </View>
            </View >
        </Layout2 >
    );
};

export default Payment;

const styles = StyleSheet.create({
    orderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        padding: 20,
        marginBottom: 20
    },
    orderText: {
        fontSize: GLOBALS.FONT.h3,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700'
    },
    priceContainer: {
        alignItems: 'space-between',
        borderRadius: 20,
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        padding: 20,
        marginBottom: 20
    },
    flex: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textItem: {
        color: GLOBALS.COLOR.PrimaryText,
        fontSize: GLOBALS.FONT.h5,
    },
    textDelivery: {
        color: 'green',
        fontSize: GLOBALS.FONT.h5,
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    shippingContainer: {
        width: '100%'
    }
})
