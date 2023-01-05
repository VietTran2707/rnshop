import React from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, TextInput, View } from 'react-native';
import GLOBALS from '../../constants/GLOBALS';
import Feather from 'react-native-vector-icons/Feather'


const UIInput = ({ placeholder, mt, name, value, width, control }) => {
    const { field } = useController({
        control,
        defaultValue: value ? value : '',
        name,
    })
    return (
        <View style={{
            marginTop: mt ? 20 : 0,
            width: width ? width : '100%'
        }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#000'}
                value={field.value}
                onChangeText={field.onChange}
                style={styles.textInput}
            />
            <Feather name='edit-2' size={20} color={GLOBALS.COLOR.PrimaryText} style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        borderRadius: 100,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginRight: 50,
        width: '100%',
        color: GLOBALS.COLOR.PrimaryText
    },
    icon: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 20,
        right: 15,
    }
})

export default UIInput;