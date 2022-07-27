import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FirstScreenNavigator, SecondScreenNavigator, ThirdScreenNavigator } from './costumnav';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Chat from './screens/Chat';
import Welcomemenu from './screens/welcomemenu';
import Mainmenu from './screens/2-mainmenu';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function ChatStack() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#f0edf6" inactiveColor="#3e2465" barStyle={{ paddingBottom: 0, backgroundColor: '#51699E'}}>
      <Tab.Screen name="Home" 
        component={FirstScreenNavigator} 
        options={{
          headerShown: false, 
          tabBarBadge:6,
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />
        )}}/>
      <Tab.Screen name="Chat" 
        component={SecondScreenNavigator} 
        options={{
          headerShown: false, 
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="chat" color={color} size={26} />
        )}}/>       
      <Tab.Screen name="Personal Data" 
        component={ThirdScreenNavigator} 
        options={{
          headerShown: false, 
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" color={color} size={26} />
        )}}/>
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={Welcomemenu} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  );
}

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <ChatStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}