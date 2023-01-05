import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { images } from '../../assets';
import UIButton from '../button/UIButton';
import Container from '../layout/Container';
import Layout from '../layout/Layout';
import GLOBALS from '../../constants/GLOBALS';
import { StackActions } from '@react-navigation/native';

const SuccessReset = ({ route, navigation }) => {
    const { hasNav } = route.params

    /**
     * Nếu có hasNav thì là là reset trong profile nhảy về màn hình profile
     * Nếu không có hasNav là reset ở màn hình Login, quay về màn hình Login
     * CreatedBy: Viet2707
     */
    const handleNavigation = () => {
        hasNav ?
            navigation.dispatch(StackActions.pop(2)) :
            navigation.push('Login')
    }

    return (
        <Layout title={'Success Reset Password'}>
            <Container>
                <Image source={images.resetPassword} />
                <Text style={styles.text}>Your Password Has </Text>
                <Text style={styles.text}>Been Change!</Text>
                <UIButton title='Done' mt onPress={handleNavigation} />
            </Container>
        </Layout>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: GLOBALS.FONT.h1,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700'
    }
})

export default SuccessReset;