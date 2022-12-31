import React from 'react';
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import GLOBALS from '../../constants/GLOBALS';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { addQuantity, minusQuantity, removeFromCart } from '../../redux/cart/cartSlice';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'

const RenderRight = () => {
    return (
        <View style={{ paddingHorizontal: 20, borderRadius: 20, backgroundColor: 'red', alignItems: "center", justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: "600", fontSize: GLOBALS.FONT.h4 }}>Delete</Text>
        </View>
    )
}

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    const addQuantityCart = () => {
        dispatch(addQuantity(item.id))
    }

    const minusQuantityCart = () => {
        dispatch(minusQuantity(item.id))
    }

    const removeItem = () => {
        dispatch(removeFromCart(item.id))
    }

    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={RenderRight} onSwipeableWillOpen={removeItem} containerStyle={{ marginTop: 10 }}>
                <View
                    style={styles.whishContainer}
                >
                    <View style={{ flex: 0.3 }}>
                        <Image source={{ uri: item.image }} style={styles.image} resizeMode='stretch' />
                    </View>
                    <View style={{ flex: 0.7, backgroundColor: 'white', flexDirection: 'row' }}>
                        <View style={{ flex: 0.7, justifyContent: 'center', padding: 20 }}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <TouchableNativeFeedback onPress={addQuantityCart}>
                                <Ionicon name='add' size={20} color='black' style={styles.buttonIcon} />
                            </TouchableNativeFeedback>
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <TouchableNativeFeedback onPress={minusQuantityCart}>
                                <AntDesign name='minus' size={20} color='black' style={styles.buttonIcon} />
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView >
    );
};

export default CartItem;

const styles = StyleSheet.create({
    whishContainer: {
        flexDirection: 'row',
        paddingVertical: 2,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 3,
        marginHorizontal: 5,
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
    buttonIcon: {
        paddingLeft: 3,
        paddingVertical: 1,
        borderColor: '#E1E1E1',
        borderWidth: 1,
        borderRadius: 50
    },
    quantity: {
        fontSize: 20,
        color: GLOBALS.COLOR.PrimaryText
    }
})