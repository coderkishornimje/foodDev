import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
        <TouchableOpacity
            style={styles.notiBackBtn}
            onPress={() => this.props.navigation.navigate('TabContainer')}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../images/back.png')}
              resizeMode="stretch"
            />
            <Text style={styles.heading}>Notification</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.child2}>
          <View style={styles.cirlceTick}>
          <Image
            style={{height: 35, width: 30,}}
            source={require('../images/tick.png')}
            resizeMode="stretch"
          />
          </View>
          <View style={styles.content}>
            <Text style={styles.head1}>Order Placed</Text>
            <Text style={styles.text}>Your Order Has Been Placed</Text>
            <Text  style={styles.text}>Successfully</Text>
          </View>
          <View style={{left:90,top:-10}}>
           <Text>12:20pm</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#E6E6E6',
  },
  child1: {
    height: '10%',
    backgroundColor: '#ffffff',
    flexDirection:'row',
    padding:20,
  },
  child2: {
    backgroundColor:'#CFE4D4',
    flexDirection:'row',
    marginHorizontal:15,
    marginVertical:20,
    paddingHorizontal:15,
    paddingVertical:20,
    borderWidth:1,
    borderColor:'#F1F9F4',
    borderRadius:10,
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 15,

  },
  cirlceTick:{
    backgroundColor:'#50E06B',
    position:'absolute',
    padding:10,
    borderRadius:100,
    top:20,
    left:10
  },
  content:{
    left:60,
    top:-10
  },
  head1:{
   fontSize:20,
   fontWeight:'bold',
   color:'#000000'
  },
  text:{
    fontSize:15,

  },
  notiBackBtn:{
    top: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
