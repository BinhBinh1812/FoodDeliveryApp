import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {SCREEN_NAME} from '../utils/appConstants';
import HomeScreen from '../screens/HomeScreen';
import OrderDeliveryScreen from '../screens/OrderDeliveryScreen';
import RestaurantScreen from '../screens/RestaurantScreen';

function RootStacks() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREEN_NAME.HOME}>
        <Stack.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
        <Stack.Screen
          name={SCREEN_NAME.ORDER_DELIVERY}
          component={OrderDeliveryScreen}
        />
        <Stack.Screen
          name={SCREEN_NAME.RESTAURANT}
          component={RestaurantScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStacks;
