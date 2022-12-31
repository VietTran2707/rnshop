import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { images } from '../../assets';
import UIButton from '../../components/button/UIButton';
import Container from '../../components/layout/Container';
import Layout from '../../components/layout/Layout';
import GLOBALS from '../../constants/GLOBALS';

const SuccessReset = ({ navigation }) => {
    return (
        <Layout title={'Success Reset Password'}>
            <Container>
                <Image source={images.resetPassword} />
                <Text style={styles.text}>Your Password Has </Text>
                <Text style={styles.text}>Been Reset!</Text>
                <UIButton title='Done' mt onPress={() => navigation.push('Login')} />
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