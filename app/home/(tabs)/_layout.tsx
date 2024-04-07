import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (


    <Tabs screenOptions={{ tabBarActiveTintColor: 'white', headerShown:false,tabBarInactiveTintColor: 'gray',tabBarStyle:{backgroundColor:'#000', borderRadius:1,height:60}}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

<Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color }) => <AntDesign name="camerao" size={28} color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) =><MaterialIcons name="account-circle" size={28} color={color} /> ,
        }}
      />
    </Tabs>

  );
}
