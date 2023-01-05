import React from 'react';
import { Text, View } from 'react-native';
import { FieldValues, useForm } from 'react-hook-form';
import { resetOptions } from '../../constants/Validation';
import UIButton from '../button/UIButton';
import PasswordInput from '../input/PasswordInput';
import Layout from '../layout/Layout';
import Navbar from '../navbar';

const ResetPassword = ({ route, navigation }) => {
    const { hasNav } = route.params
    const { control, handleSubmit, formState: { errors } } = useForm(resetOptions)

    /**
     * handleSubmit 
     * @param {*} data: value của password và confirm password 
     * Created: Viet2707
     */
    const onSubmit = (data) => {
        console.log(data);
        navigation.navigate('SuccessReset', { hasNav })
    }

    return (
        <Layout>
            {
                /**
                 * Check xem có hiển thị navbar không
                 * màn hình reset password khi đã login thì có navbar
                 * màn hình reset password khi chưa login thì không có navbar
                 * Created: Viet2707
                 */
                hasNav ? <Navbar title={'Change Password'} showBack /> : null
            }
            <View style={{ marginHorizontal: 20 }}>
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
            </View>
        </Layout>
    );
};

export default ResetPassword;