import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { StyleSheet, Text } from 'react-native'
import UIButton from '../../components/button/UIButton';
import ValidInput from '../../components/input/ValidInput';
import Container from '../../components/layout/Container';
import Layout from '../../components/layout/Layout';
import GLOBALS from '../../constants/GLOBALS';
import { emailOptions } from '../../constants/Validation';

const ForgotPassword = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm(emailOptions)

    const onSubmit = (data) => {
        console.log(data);
        // Xử lí xác nhận email để đổi mật khẩu tại đây

        navigation.navigate('ResetPassword', { hasNav: false })
    }

    return (
        <Layout title={'Forgot Password'}>
            <Container>
                <Text style={styles.text}>Please enter your email address. You will receive a link
                    to create a new password via email
                </Text>
                <ValidInput placeholder='Email' name='email' mt control={control} />
                {
                    errors.email && typeof errors.email.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 40, color: 'red' }}>{errors.email.message}</Text>)
                }
                <UIButton title='Send' onPress={handleSubmit(onSubmit)} mt width={'100%'} />
            </Container>
        </Layout>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: GLOBALS.COLOR.PrimaryText,
        lineHeight: 30
    }
})

export default ForgotPassword;