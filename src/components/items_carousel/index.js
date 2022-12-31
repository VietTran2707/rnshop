import { StyleSheet, View, Image, useWindowDimensions, TouchableOpacity, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    useAnimatedRef,
} from 'react-native-reanimated';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Pagination from './Pagination';

const ItemsCarousel = ({ data, pagination }) => {
    const scrollViewRef = useAnimatedRef(null);
    const newData = [
        { key: 'spacer-left' },
        ...data,
        { key: 'spacer-right' },
    ]

    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const SIZE = width * 0.7;
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);

    useEffect(() => {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true })
    }, [data])

    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
    });

    const Item = ({ item, index }) => {
        const style = useAnimatedStyle(() => {
            const scale = interpolate(
                x.value,
                [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                [0.8, 1, 0.8],
            );
            return {
                transform: [{ scale }],
            };
        });
        if (!item.image) {
            return <View style={{ width: SPACER }} key={index} />;
        }
        return (
            <View style={{ width: SIZE }} key={index}>
                <Animated.View style={[styles.imageContainer, style, { backgroundColor: item.color }]}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Product', { id: item.id })}
                    >
                        <View style={styles.itemHeader}>
                            {item.isNew ? <Text style={styles.headerText}>New</Text> : <View />}
                            <TouchableOpacity>
                                <Ionicon
                                    name={item.isLiked ? 'heart' : 'heart-outline'}
                                    size={24}
                                    color={item.isLiked ? 'red' : 'black'}
                                />
                            </TouchableOpacity>
                        </View>
                        <Image resizeMode='contain' source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }

    return (
        <View>
            <Animated.ScrollView
                ref={scrollViewRef}
                onScroll={onScroll}
                scrollEventThrottle={16}
                decelerationRate="fast"
                snapToInterval={SIZE}
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
            >
                {newData?.map((item, index) => (
                    <Item key={index} item={item} index={index} />
                ))}
            </Animated.ScrollView>
            {pagination && <Pagination data={data} x={x} size={SIZE} />}
        </View>
    );
};

export default ItemsCarousel;

const styles = StyleSheet.create({
    imageContainer: {
        paddingVertical: 10,
        borderRadius: 34,
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '80%',
        height: undefined,
        aspectRatio: 1,
    },
    item: {
        padding: 15,
        borderRadius: 15,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    headerText: {
        fontSize: 12,
        color: 'black'
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
    },
    price: {
        fontSize: 13,
        fontWeight: '500',
        color: '#ACB1BE',
        marginTop: 3,
    },
});
