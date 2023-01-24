import React from 'react'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Search from '../screens/Search'
import WhishList from '../screens/WhishList'
import Notification from '../screens/Notification'
import Feather from 'react-native-vector-icons/Feather';
import GLOBALS from '../constants/GLOBALS'


export const RouterList = [
    {
        name: 'Home',
        component: Home,
        options: {
            tabBarIcon: (props) => {
                return <Feather name='home' size={30} color={props.focused ? GLOBALS.COLOR.SecondColor : GLOBALS.COLOR.PrimaryText} />
            },
            tabBarShowLabel: false
        },
    },
    {
        name: 'Search',
        component: Search,
        options: {
            tabBarIcon: (props) => {
                return <Feather name='search' size={30} color={props.focused ? GLOBALS.COLOR.SecondColor : GLOBALS.COLOR.PrimaryText} />
            },
            tabBarShowLabel: false
        },
    },
    {
        name: 'WhishList',
        component: WhishList,
        options: {
            tabBarIcon: (props) => {
                return <Feather name='heart' size={30} color={props.focused ? GLOBALS.COLOR.SecondColor : GLOBALS.COLOR.PrimaryText} />
            },
            tabBarShowLabel: false
        },
    },
    {
        name: 'Notification',
        component: Notification,
        options: {
            tabBarIcon: (props) => {
                return <Feather name='bell' size={30} color={props.focused ? GLOBALS.COLOR.SecondColor : GLOBALS.COLOR.PrimaryText} />
            },
            tabBarShowLabel: false
        },
    },
    {
        name: 'Profile',
        component: Profile,
        options: {
            tabBarIcon: (props) => {
                return <Feather name='user' size={30} color={props.focused ? GLOBALS.COLOR.SecondColor : GLOBALS.COLOR.PrimaryText} />
            },
            tabBarShowLabel: false
        },
    },
]