import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        paddingHorizontal: 20,
        paddingVertical: 40,
        marginTop: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 5
    },
})

export default Container;