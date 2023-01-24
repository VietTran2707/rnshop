import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity, Text, View, StyleSheet, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import GLOBALS from '../../constants/GLOBALS';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import LogoutPopup from '../../components/logout_popup/LogoutPopup';

const Profile = ({ navigation }) => {
    /**
     * avatar: set image avatar
     * showPopup: control showpopup
     
     */
    const [avatar, setAvatar] = useState(null)
    const [showPopup, setShowPopup] = useState(false)

    /**
     * Hàm đổi avatar
     */
    const handleChangeAvatar = async () => {
        const options = {
            mediaType: 'photo'
        }
        const result = await launchImageLibrary(options);
        setAvatar(result.assets[0].uri)
        console.log(result.assets[0].uri);
    }

    /**
     * Option Item component
     * @param {optionIcon, name} 
     * handlePress: hàm xử lí của mỗi item
     * optionIcon: tên icon
     * name: tên option
     * @returns OptionItem JSX
     
     */
    const OptionItem = ({ handlePress, optionIcon, name }) => {
        return (
            <TouchableOpacity onPress={handlePress} style={styles.option}>
                {
                    name !== 'Logout' ?
                        <FontAwesome5 style={styles.optionIcon} name={optionIcon} size={25} color={GLOBALS.COLOR.PrimaryText} /> :
                        <Entypo style={styles.optionIcon} name={optionIcon} size={25} color={GLOBALS.COLOR.PrimaryText} />
                }
                <Text style={styles.optionName}>{name}</Text>
                <Entypo style={styles.optionRightIcon} name='chevron-right' size={25} color={GLOBALS.COLOR.PrimaryText} />
            </TouchableOpacity>
        )
    }

    /**
     * List option
     
     */
    const options = [
        {
            optionIcon: 'user-edit',
            name: 'Edit Profile',
            handlePress: () => {
                navigation.navigate('EditProfile')
            }
        },
        {
            optionIcon: 'key',
            name: 'Change Password',
            handlePress: () => {
                navigation.navigate('ResetPassword', { hasNav: true })
            }
        },
        {
            optionIcon: 'history',
            name: 'Order History',
            handlePress: () => {
                navigation.navigate('OrderHistory')
            }
        },
        {
            optionIcon: 'log-out',
            name: 'Logout',
            handlePress: () => {
                setShowPopup(true)
            }
        }
    ]

    return (
        <Layout>
            <TouchableOpacity style={styles.avatarContainer} onPress={handleChangeAvatar}>
                <View style={styles.avatar}>
                    <Image source={{ uri: avatar }} style={styles.avatarImage} />
                    <Entypo name='edit' size={20} color='#fff' style={styles.avatarEditIcon} />
                </View>
            </TouchableOpacity>
            <View style={styles.center}>
                <Text style={styles.username}>Username</Text>
                <Text style={styles.gmail}>example@gmail.com</Text>
            </View>
            <View style={styles.optionContainer}>
                {options.map((option, index) => (
                    <OptionItem key={index} handlePress={option.handlePress} optionIcon={option.optionIcon} name={option.name} />
                ))}
            </View>
            <LogoutPopup showPopup={showPopup} closePopup={() => setShowPopup(false)} />
        </Layout>
    );
};

export default Profile;

const styles = StyleSheet.create({
    avatarContainer: {
        alignItems: 'center',
        marginTop: 30,
        position: 'relative'
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

    avatarEditIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: GLOBALS.COLOR.PrimaryButton,
        borderRadius: 100,
        padding: 3
    },

    center: {
        marginTop: 10,
        alignItems: 'center'
    },

    username: {
        fontSize: GLOBALS.FONT.h3,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700'
    },

    gmail: {
        fontSize: GLOBALS.FONT.h4,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '500'
    },

    optionContainer: {
        marginTop: 30,
        paddingHorizontal: 30
    },

    option: {
        marginTop: 20,
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        borderRadius: 50,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    optionName: {
        fontSize: GLOBALS.FONT.h3,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700'
    },

    optionRightIcon: {

    }
})