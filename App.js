import React, { Component } from 'react';
import { View, Text,TouchableOpacity,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/Home';
import Setting from './src/Setting';
import profile from './src/profile';
import splash from './src/splash';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="black"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    > 
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Setting}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <Icon name="gear" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
      name="profile"
      component={profile}
      options={{
        tabBarLabel:'Profile',
        tabBarIcon: ({color}) => (
          <Icon name="rocket" color={color} size={26}/>
        ),
      }}
      />      
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const App = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'splash'}>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Setting" component={Setting} options={{headerShown:false}} />
        <Stack.Screen name="splash" component={splash} options={{ headerShown:false }}/>
        <Stack.Screen name="profile" component={profile}/> 
      </Stack.Navigator>
    </NavigationContainer>
    );
  
}

export default App;
