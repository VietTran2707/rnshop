import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/navbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import productApi from '../../api/productApi';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import Feather from 'react-native-vector-icons/Feather'
import BottomPoup from '../../components/bottom_popup';
import GLOBALS from '../../constants/GLOBALS';

const Product = ({ route, navigation }) => {
    const { id } = route.params
    const dispatch = useDispatch()

    const popupRef = useRef(null)

    const [detail, setDetail] = useState(null)
    const [nameButton, setNameButton] = useState(null)
    const [type, setType] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await productApi.getProduct(id)
                setDetail(res)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

    const addWhish = () => {
        setDetail({ ...detail, isLiked: !detail.isLiked })
    }

    const onShowPopup = (type) => {
        setType(type)
        switch (type) {
            case 0:
                setNameButton('Add To Cart')
                break;

            default:
                setNameButton('Buy')
                break;
        }
        popupRef.current.show()
    }

    const onClosePopup = () => {
        popupRef.current.close()
    }

    const addCart = (item) => {
        dispatch(addToCart(item))
    }

    const control = (item) => {
        switch (type) {
            case 0:
                addCart(item)
                break;

            default:
                navigation.navigate('Payment',
                    {
                        items: [item],
                        total: Math.round((item.quantity * item.price) * 100) / 100,
                        type: 1
                    })
                break;
        }
    }

    return (
        detail &&
        <View style={[styles.container, { backgroundColor: detail.color }]}>
            <Navbar title="Product" showBack={true} />
            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollInnerContainer}>
                <Image source={{ uri: detail.image }} style={styles.image} />
                <View style={styles.contentContainer}>
                    <View style={styles.detailsRow}>
                        <Text style={styles.productName}>{detail.name}</Text>
                        <Text style={styles.productPrice}>${detail.price}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <View style={styles.ratingRow}>
                            {Array.from({ length: detail.rating }).map((_, index) => (
                                <Ionicons
                                    name="md-star"
                                    size={20}
                                    color="black"
                                    style={styles.starIcon}
                                    key={index}
                                />
                            ))}
                        </View>
                        <TouchableWithoutFeedback onPress={addWhish}>
                            <Ionicon
                                name={detail.isLiked ? 'heart' : 'heart-outline'}
                                size={25}
                                color={detail.isLiked ? 'red' : 'black'}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <Text style={styles.description}>{detail.description}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => onShowPopup(0)}>
                    <Feather name='shopping-cart' size={20} color='white' style={{ marginRight: 10 }} />
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => onShowPopup(1)}>
                    <Feather name='shopping-bag' size={20} color='white' style={{ marginRight: 10 }} />
                    <Text style={styles.buttonText}>Buy</Text>
                </TouchableOpacity>
            </View>

            <BottomPoup
                ref={popupRef}
                button={nameButton}
                onTouchOutside={onClosePopup}
                detail={detail}
                getItem={item => control(item)}
            />
        </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        marginTop: 20,
        marginBottom: 10,
        width: '45%',
        height: 'auto',
        aspectRatio: 2 / 3,
        alignSelf: 'center',
    },
    scrollContainer: {
        flex: 1,
    },
    scrollInnerContainer: {
        paddingBottom: 30,
    },
    contentContainer: {
        paddingHorizontal: 25,
    },
    productName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    ratingRow: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    starIcon: {
        marginRight: 5,
    },
    colorTitle: {
        fontSize: 13,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: GLOBALS.FONT.h5,
        fontWeight: '500',
        marginVertical: 20,
        color: '#3F3F3F',
        lineHeight: 25,
    },
    buttonContainer: {
        marginHorizontal: 25,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        minWidth: '40%'
    },
    shoppingBagIcon: {
        width: 12,
        height: 17,
        tintColor: 'white',
        marginRight: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
});