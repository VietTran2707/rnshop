import { View, Text, StyleSheet } from "react-native";
import { useForm } from 'react-hook-form';
import React from "react";
import Layout2 from "../../../components/layout/Layout2";
import ValidInput from "../../../components/input/ValidInput"
import { profileOptions } from "../../../constants/Validation"
import UIButton from "../../../components/button/UIButton";

const EditProfile = () => {

    const { control, handleSubmit, formState: { errors } } = useForm(profileOptions)

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Layout2 title={'Edit Profile'} showBack>
            <View style={styles.container}>
                <ValidInput placeholder='Username' value='' name={'username'} control={control} />
                {
                    errors.username && typeof errors.username.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 20, color: 'red' }}>{errors.username.message}</Text>)
                }
                <ValidInput placeholder='Address' value='' name={'address'} mt control={control} />
                {
                    errors.address && typeof errors.address.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 20, color: 'red' }}>{errors.address.message}</Text>)
                }
                <ValidInput placeholder='Phone Number' value='' name={'phoneNumber'} mt control={control} />
                {
                    errors.phoneNumber && typeof errors.phoneNumber.message === 'string' &&
                    (<Text style={{ width: '100%', marginLeft: 20, color: 'red' }}>{errors.phoneNumber.message}</Text>)
                }
                <UIButton title="Submit" mt onPress={handleSubmit(onSubmit)} />
            </View>
        </Layout2>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 20
    }
})