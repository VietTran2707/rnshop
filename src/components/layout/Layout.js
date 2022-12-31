import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GLOBALS from '../../constants/GLOBALS';

const Layout = ({ children }) => {
    return (
        <SafeAreaView style={styles.containerArea}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerArea: {
        flex: 1,
        backgroundColor: GLOBALS.COLOR.PrimaryBackground,
    },

    title: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: '#000'
    },
})


export default Layout;