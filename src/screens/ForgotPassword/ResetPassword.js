import React from 'react';
import { Text } from 'react-native';
import Container from '../../components/layout/Container';
import Layout from '../../components/layout/Layout';
import { FieldValues, useForm } from 'react-hook-form';
import { resetOptions } from '../../constants/Validation';
import UIButton from '../../components/button/UIButton';
import PasswordInput from '../../components/input/PasswordInput';

const ConfirmPassword = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm(resetOptions)

    const onSubmit = (data) => {
        console.log(data);

        navigation.navigate('SuccessReset')
    }

    return (
        <Layout title={'Reset Password'}>
            <Container>
                <Text>Enter new password and confirm</Text>
                <PasswordInput placeholder='Password' mt name='password' control={control} />
                {
                    errors.password && typeof errors.password.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 40, color: 'red' }}>{errors.password.message}</Text>)
                }
                <PasswordInput placeholder='Confirm Password' mt name='confirmPassword' control={control} />
                {
                    errors.confirmPassword && typeof errors.confirmPassword.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 40, color: 'red' }}>{errors.confirmPassword.message}</Text>)
                }
                <UIButton title={'Change Password'} mt onPress={handleSubmit(onSubmit)} />
            </Container>
        </Layout>
    );
};

export default ConfirmPassword;