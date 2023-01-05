import React from 'react'
import Login from '../screens/Login'
import Welcome from '../screens/Welcome'
import Regist from '../screens/Regist'
import ForgotPassword from '../screens/ForgotPassword'
import ResetPassword from '../components/reset_password/ResetPassword'
import SuccessReset from '../components/reset_password/SuccessReset'
import Product from '../screens/Product'
import RegistSuccess from '../screens/Regist/RegistSuccess'
import Cart from '../screens/Cart'
import Payment from '../screens/Payment'
import PaymentSuccess from '../screens/Payment/PaymentSuccess'
import PaymentFailed from '../screens/Payment/PaymentFailed'
import OrderHistory from '../screens/Profile/OrderHistory'
import HistoryDetail from '../screens/Profile/OrderHistory/HistoryDetail'
import EditProfile from '../screens/Profile/EditProfile'

export const publicRoutes = [
    {
        name: 'Welcome',
        component: Welcome,
        options: {
            tabBarButton: (props) => null,
        }
    },
    {
        name: 'Login',
        component: Login,
        options: {
            tabBarButton: (props) => null,
        }
    },
    {
        name: 'Regist',
        component: Regist,
        options: {
            tabBarButton: (props) => null,
        }
    },
    {
        name: 'RegistSuccess',
        component: RegistSuccess,
        options: {
            tabBarButton: (props) => null,
        }
    },
    {
        name: 'ForgotPassword',
        component: ForgotPassword,
        options: {
            tabBarButton: (props) => null,
        }
    },
    {
        name: 'ResetPassword',
        component: ResetPassword,
        options: {
            tabBarButton: (props) => null,
        }
    },
    {
        name: 'SuccessReset',
        component: SuccessReset,
        options: {
            tabBarButton: (props) => null,
        }
    },
    {
        name: 'Product',
        component: Product,
        options: {
            tabBarButton: (props) => null,
        },
    },
    {
        name: 'Cart',
        component: Cart,
        options: {
            tabBarButton: (props) => null,
        },
    },
    {
        name: 'Payment',
        component: Payment,
        options: {
            tabBarButton: (props) => null,
        },
    },
    {
        name: 'PaymentSuccess',
        component: PaymentSuccess,
        options: {
            tabBarButton: (props) => null,
        },
    },
    {
        name: 'PaymentFailed',
        component: PaymentFailed,
        options: {
            tabBarButton: (props) => null,
        },
    },
    {
        name: 'OrderHistory',
        component: OrderHistory,
        options: {
            tabBarButton: (props) => null,
        },
    },
    {
        name: 'HistoryDetail',
        component: HistoryDetail,
        options: {
            tabBarButton: (props) => null,
        },
    },
    {
        name: 'EditProfile',
        component: EditProfile,
        options: {
            tabBarButton: (props) => null,
        },
    },
]