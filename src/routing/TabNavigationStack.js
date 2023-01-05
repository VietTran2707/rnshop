import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouterList } from './routes';

const Tab = createBottomTabNavigator();

const TabNavigationStack = () => {

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FBF8F2',
                tabBarHideOnKeyboard: true
            }}
        >
            {RouterList?.map((route, index) => {
                const { name, component, options } = route;
                return (
                    <Tab.Screen
                        key={index}
                        name={name}
                        component={component}
                        options={options}
                    />
                );
            })}
        </Tab.Navigator>
    )
}

export default TabNavigationStack