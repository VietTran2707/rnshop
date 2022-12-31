import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { loginOptions } from '../../constants/Validation'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UIButton from '../../components/button/UIButton';
import ValidInput from '../../components/input/ValidInput';
import PasswordInput from '../../components/input/PasswordInput';
import Layout from '../../components/layout/Layout';
import Container from '../../components/layout/Container';

const Login = ({ navigation }) => {

    const { control, handleSubmit, formState: { errors } } = useForm(loginOptions)

    const onSubmit = (data) => {
        console.log(data);
        // Xử lí kiểm tra xem tài khoản tồn tại chưa 
        navigation.navigate('Main')
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
            <View style={styles.regisAccountContainer}>
                <Text style={{ fontSize: 17, marginRight: 10 }}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Regist")}>
                    <Text style={{ fontSize: 17, color: '#000' }}>Sign Up</Text>
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

    regisAccountContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 30
    }
})

export default Login;