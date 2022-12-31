import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import UIButton from '../button/UIButton';
import Container from './Container';
import GLOBALS from '../../constants/GLOBALS';
import { useNavigation } from '@react-navigation/native';

const Layout2 = ({ image, title, nameButton, screen }) => {
    const navigation = useNavigation()
    return (
        <Container>
            <Image source={image} />
            <Text style={styles.text}>{title}</Text>
            <UIButton title={nameButton} mt onPress={() => navigation.push(screen)} />
        </Container>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: GLOBALS.FONT.h1,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700',
        textAlign: 'center'
    }
})

export default Layout2;