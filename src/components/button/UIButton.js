import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import GLOBALS from '../../constants/GLOBALS';


const UIButton = (props) => {
    const { title, width, mt, onPress } = props

    return (
        <TouchableHighlight style={[styles.button, { width: width ? width : '100%', marginTop: mt ? 20 : 0 }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: GLOBALS.COLOR.PrimaryButton,
        borderRadius: 30,
        paddingVertical: 20,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default UIButton