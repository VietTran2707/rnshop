import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import GLOBALS from "../../constants/GLOBALS";
import { useNavigation } from "@react-navigation/native";

const LogoutPopup = ({ showPopup, closePopup }) => {
    const navigation = useNavigation()

    const handleLogout = () => {
        closePopup()
        navigation.push('Login')
    }

    return (
        <Modal
            animationType="fade"
            transparent
            visible={showPopup}
            onRequestClose={() => closePopup()}
        >
            <View style={styles.overlay}>
                <View style={styles.popup}>
                    <Text style={styles.notice}>Are you sure you want to Sign Out ?</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => closePopup()} style={[styles.button, styles.cancel]}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleLogout} style={[styles.button, styles.sure]}>
                            <Text style={styles.buttonText}>Sure</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default LogoutPopup

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#000000AA',
        paddingHorizontal: 30,
        justifyContent: 'center'
    },

    popup: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    closeContainer: {
        width: '100%',
        alignItems: 'flex-end',
    },

    notice: {
        textAlign: 'center',
        color: GLOBALS.COLOR.PrimaryText,
        fontSize: GLOBALS.FONT.h2,
        fontWeight: '700'
    },

    button: {
        borderRadius: 20,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },

    cancel: {
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        marginRight: 20
    },

    sure: {
        backgroundColor: '#CCCCCC'
    },

    buttonText: {
        fontSize: GLOBALS.FONT.h4,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '500'
    }
})