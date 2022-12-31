import React from 'react';
import { TextInput, View, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native'
import Layout from '../../components/layout/Layout';
import Navbar from '../../components/navbar';
import GLOBALS from '../../constants/GLOBALS';
import ListSearch from '../../components/list_search';

const Search = ({ navigation }) => {
    return (
        <Layout>
            <Navbar title={'Search'} showBack />
            <View style={styles.container}>
                <TextInput placeholder='Search' placeholderTextColor={GLOBALS.COLOR.PrimaryText} style={styles.textInput} />
            </View>
            <ListSearch />
        </Layout>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 20
    },

    textInput: {
        backgroundColor: GLOBALS.COLOR.PrimaryColor,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginRight: 50,
        width: '100%',
        color: GLOBALS.COLOR.PrimaryText
    },
})