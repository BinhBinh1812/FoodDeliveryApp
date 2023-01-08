import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import OrderDeliveryScreen from '../OrderDeliveryScreen';
import {COLORS, getSize} from '../../utils/appConstants';
import {isIphoneX} from 'react-native-iphone-x-helper';
import HomeTab from './Tabs/HomeTab';
import SearchTab from './Tabs/SearchTab';
import LikeTab from './Tabs/LikeTab';
import UserTab from './Tabs/UserTab';
import TabBarCustomButton from '../../components/TabBarCustomButton';
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
      tabBar={props => {
        if (isIphoneX()) {
          return (
            <View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 30,
                  backgroundColor: COLORS.white,
                }}
              />
              <BottomTabBar {...props} />
            </View>
          );
        } else {
          return <BottomTabBar {...props} />;
        }
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/cutlery.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/search.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Like"
        component={LikeTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/like.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserTab}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/icons/user.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeScreen;
