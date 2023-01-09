import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { publicRoutes } from './publicRoutes';
import TabNavigationStack from './TabNavigationStack';

const Stack = createNativeStackNavigator();

const MainStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
                {publicRoutes?.map((route, index) => {
                    const { name, component, options } = route;
                    return (
                        <Stack.Screen
                            key={index}
                            name={name}
                            component={component}
                            options={options}
                        />
                    );
                })}
                <Stack.Screen name="Main" component={TabNavigationStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack