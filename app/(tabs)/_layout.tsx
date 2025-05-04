import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 2,
          elevation: 5,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              // Implement menu toggle
            }}
            style={{ marginLeft: 15 }}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nome do App</Text>
            <Image
              source={require('../../assets/icon.png')}
              style={{ width: 24, height: 24, marginRight: 8, marginLeft: 8 }}
            />
          </View>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: '',
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: '',
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="camera" color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: '',
          tabBarIcon: ({ color }: { color: string }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
