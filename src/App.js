import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './views/Home'
import Display from './views/Display'
import Calculator from './views/Calculator'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Display' component={Display} />
                <Stack.Screen name='Calculator' component={Calculator} options={{
                    headerTitleAlign: "center",
                    title: 'Calculadora de gravidade',
                    headerStyle: { backgroundColor: '#00008b' },
                    headerTintColor: '#fff'

                }}
                />
            </Stack.Navigator> 
        </NavigationContainer>
    )
}