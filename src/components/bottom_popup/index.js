import {
    Text,
    View,
    Modal,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
    StyleSheet,
    TouchableNativeFeedback
} from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import React, { Component } from "react";
import GLOBALS from "../../constants/GLOBALS";
import UIButton from '../button/UIButton'

const deviceHeight = Dimensions.get('window').height

export default class BottomPoup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            activeColorIndex: 0,
            activeSizeIndex: 0,
            quantity: 1
        }
    }

    show = () => {
        this.setState({ ...this.state, show: true })
    }

    close = () => {
        this.setState({ ...this.state, show: false })
    }

    renderOutsideTouchable = onTouch => {
        const view = <View style={{ flex: 1, width: '100%' }} />
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    addQuantity = () => {
        this.setState({ ...this.state, quantity: this.state.quantity += 1 })
    }

    minusQuantity = () => {
        if (this.state.quantity >= 1) {
            this.setState({ ...this.state, quantity: this.state.quantity -= 1 })
        }
    }

    getItem = () => {
        const { detail, getItem } = this.props
        const addItem = {
            quantity: this.state.quantity,
            color: detail.colors[this.state.activeColorIndex],
            size: detail.sizes[this.state.activeSizeIndex],
        }
        const item = { ...this.props.detail, ...addItem }
        getItem(item)
        this.close()
    }

    render() {
        let { show, activeColorIndex, activeSizeIndex, quantity } = this.state
        const { onTouchOutside, detail, button } = this.props

        return (
            <Modal
                animationType="fade"
                transparent
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000AA',
                    justifyContent: 'flex-end'
                }}
                >
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            padding: 20,
                            // maxHeight: deviceHeight * 0.6
                        }}
                    >
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: detail.image }} resizeMode='stretch' style={styles.image} />
                            <Text style={styles.price}>${detail.price}</Text>
                        </View>
                        <View style={styles.mt20}>
                            <Text style={styles.textHeader}>Color</Text>
                            <View style={styles.flexContainer}>
                                {detail.colors.map((color, i) => (
                                    <TouchableOpacity
                                        onPress={() => this.setState({ ...this.state, activeColorIndex: i })}
                                        style={[
                                            styles.colorContainer,
                                            activeColorIndex === i && styles.activeColorContainer,
                                        ]}>
                                        <View style={[styles.colorDot, { backgroundColor: color }]} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View style={styles.mt20}>
                            <Text style={styles.textHeader}>Size</Text>
                            <View style={styles.flexContainer}>
                                {detail.sizes.map((size, i) => (
                                    <TouchableOpacity
                                        onPress={() => this.setState({ ...this.state, activeSizeIndex: i })}
                                        style={[
                                            styles.sizeContainer,
                                            activeSizeIndex === i && styles.activeSizeContainer,
                                        ]}
                                    >
                                        <Text style={styles.text}>{size}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View style={[styles.mt20, styles.quantityContainer]}>
                            <Text style={styles.textHeader}>Quantity</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableNativeFeedback onPress={this.minusQuantity}>
                                    <AntDesign name='minus' size={20} color='black' style={styles.buttonIcon} />
                                </TouchableNativeFeedback>
                                <Text style={styles.quantity}>{quantity}</Text>
                                <TouchableNativeFeedback onPress={this.addQuantity}>
                                    <Ionicon name='add' size={20} color='black' style={styles.buttonIcon} />
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                        <UIButton title={button} mt onPress={this.getItem} />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 10,
        borderBottomColor: GLOBALS.COLOR.PrimaryColor,
        borderBottomWidth: 1
    },

    image: {
        flex: 0.4,
        height: undefined,
        aspectRatio: 1
    },

    price: {
        fontSize: GLOBALS.FONT.h3,
        color: 'red',
        marginLeft: 20
    },

    mt20: {
        marginTop: 20
    },

    textHeader: {
        fontSize: GLOBALS.FONT.h4,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700'
    },

    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        flexWrap: 'wrap',
        borderBottomColor: GLOBALS.COLOR.PrimaryColor,
        borderBottomWidth: 1
    },

    colorContainer: {
        marginRight: 12,
    },

    activeColorContainer: {
        padding: 3,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 2,
    },

    colorDot: {
        width: 26,
        height: 26,
        borderRadius: 13,
    },

    sizeContainer: {
        padding: 10,
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        marginRight: 12,
        marginBottom: 12
    },

    text: {
        fontSize: GLOBALS.FONT.h6,
        color: GLOBALS.COLOR.PrimaryText
    },

    activeSizeContainer: {
        borderWidth: 1,
        borderColor: 'red'
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
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
        color: GLOBALS.COLOR.PrimaryText,
        marginHorizontal: 15
    }
})
