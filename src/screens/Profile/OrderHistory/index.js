import { View, Text, ScrollView } from "react-native";
import React from "react";
import Layout2 from "../../../components/layout/Layout2";
import HistoryItem from "../../../components/order_item/HistoryItem";

const listOrderHistorys = [
    {
        id: 2311,
        status: 'delivering',
        name: 'Viet chair',
        time: '27 July',
        quantity: 1,
        price: 232,
        total: 232
    },
    {
        id: 4321,
        status: 'delivered',
        name: 'Manh chair',
        time: '04 July',
        quantity: 1,
        price: 232,
        total: 232
    },
    {
        id: 3441,
        status: 'canceled',
        name: 'Phuong chair',
        time: '04 Jan',
        quantity: 1,
        price: 232,
        total: 232
    },
]


const OrderHistory = () => {
    return (
        <Layout2 title={'Search'} showBack>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
                {listOrderHistorys.map(item => <HistoryItem key={item.id} item={item} />)}
            </ScrollView>
        </Layout2>
    );
};

export default OrderHistory;
