import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../../screens/Cart/CartScreen.tsx';
import COLORS from '../../styles/colors';
import ConfirmOrderScreen from '../../screens/Cart/ConfirmOrderScreen.tsx';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({}) => ({
        headerTintColor: COLORS.black,
        headerBackTitle: 'Back',
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: 'transparent'},
        headerTransparent: true,
      })}>
      <Stack.Screen
        name="Cart"
        options={{title: 'Dish basket'}}
        component={CartScreen}
      />
      <Stack.Screen name="Order" component={ConfirmOrderScreen} />
    </Stack.Navigator>
  );
};

export default CartStack;
