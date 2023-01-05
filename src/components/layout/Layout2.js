import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GLOBALS from '../../constants/GLOBALS';
import Navbar from '../navbar';

const Layout2 = ({ children, title, showBack }) => {
    return (
        <SafeAreaView style={styles.containerArea}>
            <Navbar title={title} showBack={showBack} />
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerArea: {
        flex: 1,
        backgroundColor: GLOBALS.COLOR.PrimaryBackground,
    },
})


export default Layout2;