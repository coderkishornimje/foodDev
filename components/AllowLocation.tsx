import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface IState {}
interface IProps {
  navigation?: any;
}
export default class AllowLocation extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
          <Image
            style={{height: 300, width: 350}}
            source={require('../images/locationLogo.png')}
            resizeMode="stretch"
          />
          <Text style={styles.heading}>Allow Location</Text>
          <Text style={styles.subheading}>
            We need your Permeission to access
          </Text>
          <Text style={styles.subheading}>your location</Text>
        </View>
        <TouchableOpacity testID='allowBtn'
          style={styles.loginbtn}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.logintext}>ALLOW LOCATION</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000000',
            alignSelf: 'center',
            bottom: 15,
          }}>
          Don't Allow
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  child1: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  subheading: {
    fontSize: 18,
    color: '#000000',
  },
  logintext: {
    fontSize: 20,
    alignSelf: 'center',
    //fontWeight:'bold',
    color: '#ffffff',
  },
  loginbtn: {
    backgroundColor: '#94CD00',
    marginHorizontal: 40,
    // left: -40,
    top: 0,
    padding: 15,
    borderRadius: 40,
    margin: 40,
  },
});
