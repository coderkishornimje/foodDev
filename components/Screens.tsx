import {StackView, createStackNavigator} from '@react-navigation/stack';

import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import OnboardScreen from './OnboardScreen';
import Login from './Login';
import Splash from './Splash';
import Register from './Register';
import OtpVerify from './OtpVerify';
import AllowLocation from './AllowLocation';
import Home from './Home';
import CustomTabBar from './CustomTabBar';
import Offer from './Offer';
import TabNavigator from './TabNavigator';
import Search from './Search';
import Cart from './Cart';
import Notification from './Notification';
import Main from './profile/Main';
import {Tab} from 'react-native-elements';
import TabContainer from './TabContainer';
import Favorite from './profile/Favorite';
import Editprofile from './profile/Editprofile';
import Order from './profile/Order';
import ViewAllTodayFood from './ViewAllTodayFood';
import AllPizaas from './AllPizaas';
import ShowFoods from './food-category/ShowFoods';
import NearbyResto from './NearbyResto';

const Stack = createStackNavigator();

export default class Screens extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="OnboardScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
        <Stack.Screen name="AllowLocation" component={AllowLocation} />
        
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="CustomTabBar" component={CustomTabBar} /> */}
        <Stack.Screen name="Offer" component={Offer} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="ViewAllTodayFood" component={ViewAllTodayFood} />
        <Stack.Screen name="AllPizaas" component={AllPizaas} />
        <Stack.Screen name="ShowFoods" component={ShowFoods} />
        <Stack.Screen name="NearbyResto" component={NearbyResto} />
        

        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Order" component={Order} />
        
        <Stack.Screen name="TabContainer" component={TabContainer} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
