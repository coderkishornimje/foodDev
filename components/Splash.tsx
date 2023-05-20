import {Text, StyleSheet, View, ImageBackground, Image} from 'react-native';
import React, {Component} from 'react';


export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../images/Rectangle.png')}
          resizeMode="stretch"
          style={styles.imagebg}>
        <View style={styles.child1}>
          <Image
          style={styles.childimg}
          source={require('../images/Sicon.png')}/>
          <Text style={styles.heading}>Food Delivery</Text>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  child1:{
    height:'100%',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
     alignSelf:'center',
     bottom:100,
     right:100
  },
  imagebg: {
    height: '100%',
    width: '100%',
  },
  childimg:{
    height:100,
    width:200,
  },
  heading:{
    fontSize:35,
    color:'white',
    fontWeight:'bold',
    alignSelf:'center',
    marginLeft:45
  }
});
