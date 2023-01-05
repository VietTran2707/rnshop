import React from 'react';
import { useForm } from 'react-hook-form';
import { loginOptions } from '../../constants/Validation'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UIButton from '../../components/button/UIButton';
import ValidInput from '../../components/input/ValidInput';
import PasswordInput from '../../components/input/PasswordInput';
import Layout from '../../components/layout/Layout';
import Container from '../../components/layout/Container';
import { CommonActions } from '@react-navigation/native';
import GLOBALS from '../../constants/GLOBALS';

const Login = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm(loginOptions)

    const onSubmit = (data) => {
        console.log(data);
        // Xử lí kiểm tra xem tài khoản tồn tại chưa 
        console.log(CommonActions.reset());
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'Main' },
                ]
            })
        );
    }

    return (
        <Layout>
            <Container>
                <Text style={styles.lgContentTitle}>Welcome Back</Text>
                <Text style={styles.smallContentTitle}>Sign in to continue</Text>
                {/* Validate username */}
                <ValidInput placeholder='Username' name={'username'} control={control} />
                {
                    errors.username && typeof errors.username.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 40, color: 'red' }}>{errors.username.message}</Text>)
                }

                {/* Validate password */}
                <PasswordInput placeholder='Password' name={'password'} mt control={control} />
                {
                    errors.password && typeof errors.password.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 40, color: 'red' }}>{errors.password.message}</Text>)
                }

                <View style={{ alignItems: 'flex-end', width: '100%', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <UIButton title='Sign in' onPress={handleSubmit(onSubmit)} />
            </Container>
            <View style={styles.registAccountContainer}>
                <Text style={styles.registText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Regist")}>
                    <Text style={styles.registButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Layout>

    );
};

const styles = StyleSheet.create({
    lgContentTitle: {
        fontSize: 30,
        color: '#000',
        fontWeight: '800',
    },

    smallContentTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 60
    },

    forgotPassword: {
        color: '#000',
        marginTop: 20,
        marginRight: 10
    },

    registAccountContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 30
    },

    registText: {
        fontSize: GLOBALS.FONT.h4,
        color: GLOBALS.COLOR.PrimaryText,
        marginRight: 10,
    },

    registButtonText: {
        fontSize: GLOBALS.FONT.h4,
        color: GLOBALS.COLOR.PrimaryText,
        fontWeight: '700'
    }
})

export default Login;