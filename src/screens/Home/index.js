import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import CategoryTabs from '../../components/categorie_tabs';
import Layout2 from '../../components/layout/Layout2';
import ItemsCarousel from '../../components/items_carousel';
import UIList from '../../components/ui_list';
import productApi from '../../api/productApi';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('Chairs');

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await productApi.getProductCategory(selectedCategory)
                setData(res)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [selectedCategory])

    return (
        data &&
        <Layout2 title="Furniture" showBack={false}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollInnerContainer}>
                <View style={styles.categoriesContainer}>
                    <CategoryTabs
                        selectedCategory={selectedCategory}
                        onSelect={category => setSelectedCategory(category)}
                    />
                </View>
                <ItemsCarousel data={data} pagination />
                <UIList title='Best Offers for Sofas' />
            </ScrollView>
        </Layout2>
    );
};

const styles = StyleSheet.create({
    categoriesContainer: {
        marginTop: 25,
        marginBottom: 20,
    },
    scrollInnerContainer: {
        paddingBottom: 70,
    },
});

export default Home;