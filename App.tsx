import 'react-native-gesture-handler';
import {Text, StyleSheet, View,Platform} from 'react-native';
import React, {Component} from 'react';
import Splash from './components/Splash';
import {NavigationContainer} from '@react-navigation/native';
import {Screen} from 'react-native-screens';
import Screens from './components/Screens';
import CustomTabBar from './components/CustomTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppContextProvider from './components/AppContext';

interface IState {
  isLoading: boolean;
}
interface IProps {
  navigation?: any;
}
const Tab = createBottomTabNavigator();
export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);
  }

  render() {
    if (this.state.isLoading) {
      return <Splash />;
    }

    return (
      <AppContextProvider>
      <NavigationContainer>
         <Screens/>
      </NavigationContainer>
      </AppContextProvider>
    );
  }
}

const styles = StyleSheet.create({});
