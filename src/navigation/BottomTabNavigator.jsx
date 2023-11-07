import { StyleSheet, View } from 'react-native';

import CartNavigator from './CartNavigator';
import Feather from '@expo/vector-icons/Feather';
import OrdersNavigator from './OrdersNavigator';
import ProfileNavigator from './ProfileNavigator';
import StackNavigator from './StackNavigator';
import { colors } from '../constants/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="shopping-bag" size={27} color={colors.tertiary} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="shopping-cart" size={27} color={colors.tertiary} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersNav"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="list" size={27} color={colors.tertiary} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileNav"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="settings" size={27} color={colors.tertiary} />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.fifth,
    paddingTop: 1,
  },
  iconContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
