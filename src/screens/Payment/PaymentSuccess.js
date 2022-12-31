import React from "react";
import Layout from "../../components/layout/Layout";
import Container2 from "../../components/layout/Container2"
import { images } from "../../assets";

const PaymentSuccess = () => {
    return (
        <Layout>
            <Container2
                image={images.success}
                title="Thank's for your order!"
                nameButton="Continue Shopping"
                screen="Main"
            />
        </Layout>
    );
};

export default PaymentSuccess;
