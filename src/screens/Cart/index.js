import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import UIButton from '../../components/button/UIButton';
import CartItem from '../../components/cart_item';
import Layout2 from '../../components/layout/Layout2';
import GLOBALS from '../../constants/GLOBALS'
import EmptyCard from './EmptyCard';

const Cart = ({ navigation }) => {
    const cart = useSelector((state) => state.cart)
    const { listItems, total } = cart

    return (
        <Layout2 title='Cart' showBack>
            {
                listItems.length == 0 ?
                    <EmptyCard />
                    : (
                        <View style={{ flex: 1 }}>
                            <ScrollView
                                style={styles.scrollView}
                                showsVerticalScrollIndicator={false}
                            >
                                {listItems.map(item => (<CartItem key={item.id} item={item} />))}
                            </ScrollView>
                            <View style={styles.totalContainer}>
                                <View style={styles.flexRow}>
                                    <Text style={styles.mainText}>SubTotal</Text>
                                    <Text style={styles.mainText}>${total}</Text>
                                </View>
                                <View style={styles.flexRow}>
                                    <Text style={styles.discountText}>Discount</Text>
                                    <Text style={styles.discountText}>-0</Text>
                                </View>
                                <View style={styles.flexRow}>
                                    <Text style={styles.mainText}>Total</Text>
                                    <Text style={styles.mainText}>${total}</Text>
                                </View>
                                <UIButton title='Checkout' mt onPress={() => navigation.navigate('Payment', { items: [], total: 0, type: 0 })} />
                            </View>
                        </View>
                    )
            }
        </Layout2>
    );
};

export default Cart;

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        margin: 20,
        marginTop: 10
    },

    totalContainer: {
        marginHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        padding: 20,
        paddingTop: 10,
    },

    flexRow: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    mainText: {
        fontSize: GLOBALS.FONT.h4,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '600'
    },

    discountText: {
        fontSize: GLOBALS.FONT.h4,
        color: '#C0C0C0',
        fontWeight: '600'
    }
})