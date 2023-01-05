import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout2 from "../../../components/layout/Layout2";
import GLOBALS from "../../../constants/GLOBALS";
import UIButton from "../../../components/button/UIButton";

const HistoryDetail = ({ route }) => {
    const { item } = route.params
    const { id, name, quantity, price, total, status } = item

    /**
     * Xử lí giao diện button
     * Nếu status mà là đang giao hàng thì button hiển thị là canncel
     * Nếu status mà là đã giao hoặc cancel thì button hiển thị là buy again
     * CreatedBy: Viet2707
     */
    let button = null
    if (status === 'delivering') {
        button = <UIButton title='Cancel' mt />
    } else {
        button = <UIButton title='Buy Again' mt />
    }

    return (
        <Layout2 title={'History Detail'} showBack>
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <Text style={styles.titleText}>Deliver ID</Text>
                    <Text style={styles.detailText}>#{id}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.titleText}>Name</Text>
                    <Text style={styles.detailText}>{name}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.titleText}>Quantity</Text>
                    <Text style={styles.detailText}>{quantity}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.titleText}>Price</Text>
                    <Text style={styles.detailText}>${price}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.titleText}>Total</Text>
                    <Text style={styles.detailText}>${total}</Text>
                </View>
                {button}
            </View>
        </Layout2>
    );
};

export default HistoryDetail;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    itemContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    titleText: {
        fontSize: GLOBALS.FONT.h3,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700'
    },
    detailText: {
        fontSize: GLOBALS.FONT.h4,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '500'
    }
})
