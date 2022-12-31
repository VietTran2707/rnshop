import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, TextInput, Image, View, TouchableOpacity } from 'react-native';
import GLOBALS from '../../constants/GLOBALS';
import Feather from 'react-native-vector-icons/Feather'

const UIInput = ({ placeholder, mt, name, width, control }) => {
    const { field } = useController({
        control,
        defaultValue: '',
        name,
    })

    const [hidePass, setHidePass] = useState(true)

    return (
        <View style={{ width: width ? width : '100%', marginTop: mt ? 20 : 0 }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#000'}
                value={field.value}
                onChangeText={field.onChange}
                secureTextEntry={hidePass}
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.icon} onPress={() => setHidePass(hide => !hide)}>
                <Feather name={hidePass ? 'eye-off' : 'eye'} size={20} color={GLOBALS.COLOR.PrimaryText} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        borderRadius: 100,
        paddingVertical: 15,
        paddingHorizontal: 20,
        paddingRight: 50,
        color: GLOBALS.COLOR.PrimaryText
    },
    icon: {
        width: 25,
        height: 25,
        position: 'absolute',
        right: 15,
        top: 20,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default UIInput;