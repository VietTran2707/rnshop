import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categories = ['Chairs', 'Sofas', 'Beds', 'Lamps'];

const CategoryTabs = ({ selectedCategory, onSelect }) => {
    return (
        <View style={styles.container}>
            {categories.map((category, index) => {
                const isSelected = category === selectedCategory;
                return (
                    <View key={index} style={styles.categoryContainer}>
                        <TouchableOpacity onPress={() => onSelect(category)}>
                            <Text style={styles.category}>{category}</Text>
                        </TouchableOpacity>
                        {isSelected && <View style={styles.selectedIndicator} />}
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryContainer: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        // borderWidth: 2
    },
    category: {
        fontSize: 22,
        fontWeight: '500',
        color: 'black',
    },
    selectedIndicator: {
        width: 12,
        height: 3,
        backgroundColor: 'black',
        borderRadius: 3,
    },
});

export default CategoryTabs;