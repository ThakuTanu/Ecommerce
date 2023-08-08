// In App.js in a new project

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './src/screens/Landing';
import LaunchSplash from './src/screens/LaunchSplash';
import Signup from './src/screens/Signup';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import { AuthContext } from './src/context/Authcontext';
import Productdetail from './src/screens/Productdetail';
import Addtocart from './src/screens/Addtocart';
import Header from './src/components/Header';
import Singleproduct from './src/screens/Singleproduct';
import Demoheader from './src/components/Demoheader';
import Profile from './src/screens/Profile';
import Map from './src/screens/Map';

const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();


const Drawer = createDrawerNavigator();




const AuthStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="LaunchSplash" component={LaunchSplash} /> */}
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

const ProductStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Productdetails" component={Productdetail} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}


const HomeStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
            <Stack.Screen name="Pdetail" component={Productdetail} options={{ headerShown: false }} />
            <Stack.Screen name="Addtocart" component={Addtocart} options={{ headerShown: false }} />
            <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
            <Stack.Screen name="Singleproduct" component={Singleproduct} options={{ headerShown: false }} />
            <Stack.Screen name="Demoheader" component={Demoheader} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Mapnavigate" component={Map} options={{ headerShown: false }} />
            
        </Stack.Navigator>
    )
}

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Drawerstack = () => {

    return (
        <Drawer.Navigator screenOptions={{drawerActiveBackgroundColor:'#aa18ea',drawerActiveTintColor:'white', fontSize:15,fontFamily:'Roboto'}}initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStack} options={{headerShown:false}}/>
            <Drawer.Screen name="Notifications" component={Tabstack} options={{headerShown:false}}/>
            <Drawer.Screen name="Products" component={Productdetail} options={{headerShown:false}}/>
            <Drawer.Screen name="Map" component={Map} options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}

const Tabstack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{
                headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Image source={require("./src/assests/home.png")} style={{ width: 30, height: 30 }} />
                )
            }} />
            <Tab.Screen name="profile" component={ProfileStack} options={{
                headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Image source={require("./src/assests/add.png")} style={{ width: 30, height: 30 }} />)
            }} />

            <Tab.Screen name="search" component={ProfileStack} options={{
                headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Image source={require("./src/assests/search.png")} style={{ width: 30, height: 30 }} />)
            }} />

        </Tab.Navigator>
    )

}

function Route() {
    const { state } = React.useContext(AuthContext)

    console.log(state, 'state')
    return (
        <>
            <NavigationContainer>
                {
                    state.isloggedIn ? (
                       <Drawerstack /> 
                    ) : (
                        <AuthStack />
                        
                    )
                }
            </NavigationContainer>
        </>
    );
    
}
export default Route;


//auth

//dashboard