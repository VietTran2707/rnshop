import React from 'react';
import { useForm } from 'react-hook-form';
import { registOptions } from '../../constants/Validation';
import { View, Text, StyleSheet } from 'react-native';
import UIButton from '../../components/button/UIButton';
import ValidInput from '../../components/input/ValidInput';
import Layout from '../../components/layout/Layout';
import Container from '../../components/layout/Container';
import PasswordInput from '../../components/input/PasswordInput';

const Login = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm(registOptions)

    const onSubmit = (data) => {
        console.log(data);
        // Xử lí đưa dữ liệu lên database 
        navigation.navigate('RegistSuccess')
    }

    return (
        <Layout title={'Sign Up'} >
            <Container>
                <Text style={styles.lgContentTitle}>Sign Up</Text>
                {/* Validate username */}
                <ValidInput placeholder='Username' mt name={'username'} control={control} />
                {
                    errors.username && typeof errors.username.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 40, color: 'red' }}>{errors.username.message}</Text>)
                }

                {/* Validate gmail */}
                <ValidInput placeholder='Email' mt name={'email'} control={control} />
                {
                    errors.email && typeof errors.email.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 40, color: 'red' }}>{errors.email.message}</Text>)
                }

                {/* Validate password */}
                <PasswordInput placeholder='Password' name={'password'} mt control={control} />
                {
                    errors.password && typeof errors.password.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 40, color: 'red' }}>{errors.password.message}</Text>)
                }

                {/* Validate re-type password */}
                <PasswordInput placeholder='Confirm password' name={'confirmPassword'} mt control={control} />
                {
                    errors.confirmPassword && typeof errors.confirmPassword.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 40, color: 'red' }}>{errors.confirmPassword.message}</Text>)
                }

                <View style={{ marginTop: 20 }}></View>
                <UIButton title='Sign up' width={'100%'} onPress={handleSubmit(onSubmit)} />
            </Container>
        </Layout>
    );
};

const styles = StyleSheet.create({
    lgContentTitle: {
        fontSize: 30,
        color: '#000',
        fontWeight: '800',
    },
})

export default Login;