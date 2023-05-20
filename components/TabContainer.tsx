import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Search from './Search';
import Cart from './Cart';
import Offer from './Offer';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

export default class TabContainer extends Component {

  render() {
    return (
        <Tab.Navigator  tabBar={props => <CustomTabBar {...props} />}
        initialRouteName='Home'
        screenOptions={{headerShown: false}}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          tabStyle: {
            backgroundColor: '#ffffff',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}: any) => (
                 <Icon name="ios-home" size={24} color={'gray'} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({tintColor}: any) => (
              <Icon name="ios-search" size={24} color={tintColor} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({tintColor}: any) => (
              <Icon name="ios-cart" size={24} color={tintColor} />
            ),
          }}
        />
        <Tab.Screen
          name="Offer"
          component={Offer}
          options={{
            tabBarLabel: 'Offer',
            tabBarIcon: ({tintColor}: any) => (
              <Icon name="ios-gift" size={24} color={tintColor} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({})