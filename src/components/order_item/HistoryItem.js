import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import GLOBALS from "../../constants/GLOBALS";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";


const HistoryItem = ({ item }) => {
    const { status, name, time } = item
    const navigation = useNavigation()

    let view = null

    switch (status) {
        case 'delivering':
            view = <FontAwesome5 name="shipping-fast" size={30} color={GLOBALS.COLOR.PrimaryText} />
            break;

        case 'delivered':
            view = <MaterialIcons name="done" size={30} color={GLOBALS.COLOR.PrimaryText} />
            break;

        case 'canceled':
            view = <MaterialIcons name="cancel" size={30} color={GLOBALS.COLOR.PrimaryText} />
            break;

        default:
            view = <View></View>
            break;
    }


    return (
        <TouchableOpacity style={styles.historyContainer} onPress={() => navigation.navigate('HistoryDetail', { item: item })}>
            {view}
            <View style={styles.containerText}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textDate}>{time}</Text>
            </View>
            <View style={styles.historyStatus}>
                <Text style={styles.statusText}>{status.charAt(0).toUpperCase() + status.slice(1)}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default HistoryItem;

const styles = StyleSheet.create({
    historyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        paddingVertical: 10,
        borderRadius: 30,
        paddingHorizontal: 10,
        marginTop: 20
    },

    image: {
        width: 40,
        height: undefined,
        aspectRatio: 1
    },

    containerText: {
        flex: 1,
        marginLeft: 30
    },

    textName: {
        fontSize: GLOBALS.FONT.h3,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700'
    },

    textDate: {
        fontSize: GLOBALS.FONT.h5,
        color: GLOBALS.COLOR.PrimaryText
    },

    historyStatus: {
        borderRadius: 20,
        minWidth: 90,
        paddingVertical: 10
    },

    statusText: {
        textAlign: 'center',
        fontWeight: '700',
        color: GLOBALS.COLOR.PrimaryText,
        fontSize: GLOBALS.FONT.h4
    }
})
