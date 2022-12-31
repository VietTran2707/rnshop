import React from 'react';
import { images } from '../../assets';
import Container2 from '../../components/layout/Container2';

const RegistSuccess = ({ navigation }) => {
    return (
        <Layout>
            <Container2
                image={images.accountCreated}
                title="Your Account Has Been Created"
                nameButton="Done"
                screen="Login"
            />
        </Layout>
    );
};

export default RegistSuccess;