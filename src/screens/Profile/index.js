import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import GLOBALS from '../../constants/GLOBALS';

const Profile = ({ navigation }) => {

    const [avatar, setAvatar] = useState(null)

    const handleChangeAvatar = async () => {
        const options = {
            mediaType: 'photo'
        }
        const result = await launchImageLibrary(options);
        setAvatar(result.assets[0].uri)
        console.log(result.assets[0].uri);
    }

    return (
        <Layout>
            <TouchableOpacity style={styles.avatarContainer} onPress={handleChangeAvatar}>
                <View style={styles.avatar}>
                    <Image source={{ uri: avatar }} style={styles.avatarImage} />
                </View>
            </TouchableOpacity>
            <View style={styles.center}>
                <Text style={styles.username}>Username</Text>
                <Text>example@gmail.com</Text>
            </View>
            <View>

            </View>
        </Layout>
    );
};

export default Profile;

const styles = StyleSheet.create({
    avatarContainer: {
        alignItems: 'center',
        marginTop: 30
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#E7E7E5'
    },

    avatarImage: {
        width: '100%'
    },

    center: {
        alignItems: 'center'
    },

    username: {
        fontSize: GLOBALS.FONT.h4,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700'
    }
})