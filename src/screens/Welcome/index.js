import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { images } from '../../assets';
import UIButton from '../../components/button/UIButton';


const Welcome = ({ navigation }) => {
    return (
        <ImageBackground
            source={images.background}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <UIButton title={'Get Started'} onPress={() => navigation.navigate('Login')} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    },

    container: {
        marginHorizontal: 30,
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
        alignItems: 'center'
    },
})

export default Welcome;