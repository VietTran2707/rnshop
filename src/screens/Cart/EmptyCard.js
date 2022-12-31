import React from "react";
import Layout from "../../components/layout/Layout";
import Container2 from "../../components/layout/Container2"
import { images } from "../../assets";

const EmptyCard = () => {
    return (
        <Layout>
            <Container2
                image={images.empty}
                title='Your Cart Is Empty'
                nameButton='Shop Now'
                screen="Main"
            />
        </Layout>
    );
};

export default EmptyCard;

