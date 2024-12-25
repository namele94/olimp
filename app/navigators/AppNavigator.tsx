import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CartStack from './stacks/CartStack.tsx';
import ReservationSuccessScreen from '../screens/ReservationSuccessScreen.tsx';
import COLORS from '../styles/colors.ts';
import MenuScreen from '../screens/MenuScreen.tsx';
import HomeScreen from '../screens/HomeScreen.tsx';
import ReservationScreen from '../screens/ReservationScreen.tsx';
import ContactScreen from '../screens/ContactScreen.tsx';
import EventsScreen from '../screens/EventsScreen.tsx';
import EventScreen from '../screens/EventScreen.tsx';

const Stack = createStackNavigator();

const DEFAULT_HEADER = {
  headerBackTitle: 'Back',
  headerStyle: {backgroundColor: 'transparent'},
  headerTintColor: COLORS.black,
  headerShadowVisible: false,
  headerTransparent: true,
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
            headerBackTitle: '',
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="CartStack"
          component={CartStack}
          options={{
            headerShown: false,
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Shop"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Reservation"
          component={ReservationScreen}
          options={{
            ...DEFAULT_HEADER,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactScreen}
          options={{
            ...DEFAULT_HEADER,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Events"
          component={EventsScreen}
          options={{
            ...DEFAULT_HEADER,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ReservationSuccessScreen"
          component={ReservationSuccessScreen}
          options={{
            ...DEFAULT_HEADER,
            headerTitleAlign: 'center',
            title: 'Reservation',
          }}
        />
        <Stack.Screen
          name="Event"
          // @ts-ignore
          component={EventScreen}
          options={{
            ...DEFAULT_HEADER,
            headerTitleAlign: 'center',
            headerTintColor: COLORS.white,
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
