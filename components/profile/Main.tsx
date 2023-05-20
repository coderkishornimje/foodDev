import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import React, {Component} from 'react';
import {Image} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
          <TouchableOpacity
            style={styles.profileBackBtn}
            onPress={() => this.props.navigation.navigate('TabContainer')}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../../images/back.png')}
              resizeMode="stretch"
            />
            <Text style={styles.heading}>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.child2}>
          <Image
            style={styles.profileimg}
            source={require('../../images/home/profile.png')}
            resizeMode="stretch"
          />
          <View style={styles.nameContent}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
              Hi, Kishor
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 20, width: 20, marginRight: 5}}
                source={require('../../images/home/locationIcon.png')}
                resizeMode="stretch"
              />
              <Text style={{fontSize: 15, color: '#3e3e3e'}}>
                Nagpur Maharashtra
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.child3}>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Order')}>
            <Image
              style={{height: 30, width: 30, left: 5}}
              source={require('../../images/profile/shopping-bag.png')}
              resizeMode="stretch"
            />
            <Text style={styles.subHead}>Order</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Editprofile')}>
              <Image
                style={{height: 30, width: 30, left: 20}}
                source={require('../../images/profile/user.png')}
                resizeMode="stretch"
              />
              <Text style={styles.subHead}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Favorite')}>
              <Image
                style={{height: 30, width: 30, left: 15}}
                source={require('../../images/profile/heart.png')}
                resizeMode="stretch"
              />
              <Text style={styles.subHead}>Favorite</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.child4}>
          <View style={styles.homeTab}>
            <View style={styles.homefirstIcon}>
              <ImageBackground
                source={require('../../images/profile/homeiconbg.png')}
                resizeMode="stretch"
                style={{
                  height: 25,
                  width: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 15,
                    width: 10,
                    top: 6,
                    borderWidth: 0.5,
                    borderColor: '#000000',
                  }}
                  source={require('../../images/profile/homepoint.png')}
                  resizeMode="cover"
                />
              </ImageBackground>
            </View>
            <Text style={styles.homeText}>Home</Text>
          </View>
          <View style={styles.homeTab}>
            <View style={styles.offerfirstIcon}>
              <ImageBackground
                source={require('../../images/profile/offericon.png')}
                resizeMode="stretch"
                style={{
                  height: 25,
                  width: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></ImageBackground>
            </View>
            <Text style={styles.homeText}>Offers</Text>
          </View>
          <View style={styles.homeTab}>
            <View style={styles.offerfirstIcon}>
              <ImageBackground
                source={require('../../images/profile/pp.png')}
                resizeMode="stretch"
                style={{
                  height: 25,
                  width: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></ImageBackground>
            </View>
            <Text style={styles.homeText}>Privacy Policy</Text>
          </View>
          <View style={styles.homeTab}>
            <View style={styles.offerfirstIcon}>
              <ImageBackground
                source={require('../../images/profile/tc.png')}
                resizeMode="stretch"
                style={{
                  height: 25,
                  width: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></ImageBackground>
            </View>
            <Text style={styles.homeText}>Terms And Conditions</Text>
          </View>
          <View style={styles.homeTab}>
            <View style={styles.logoutfirstIcon}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 15,
                    width: 15,
                    left: 5,
                  }}
                  source={require('../../images/profile/log1.png')}
                  resizeMode="cover"
                />
                <Image
                  style={{
                    height: 15,
                    width: 15,
                  }}
                  source={require('../../images/profile/log2.png')}
                  resizeMode="cover"
                />
              </View>
            </View>
            <Text style={styles.homeText}>Logout</Text>
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
    flexDirection: 'row',
    //paddingVertical: 20,
    // paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  nameContent: {
    top: 45,
    marginHorizontal: 5,
  },
  profileimg: {
    height: 140,
    width: 140,
  },
  notification: {
    top: 20,
    left: 100,
  },
  child2: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    top: 10,
  },
  child3: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    top: 20,
    padding: 25,
    borderRadius: 10,
  },
  subHead: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  child4: {
    backgroundColor: '#ffffff',
    top: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  homeTab: {
    //height:'100%',
    // width:'100%',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderBottomColor: '#000000',
    borderBottomWidth: 0.5,
  },
  homefirstIcon: {
    backgroundColor: '#DF201F',
    position: 'absolute',
    padding: 10,
    borderRadius: 100,
    left: 10,
    top: 13,
  },
  offerfirstIcon: {
    backgroundColor: '#FFE5E5',
    position: 'absolute',
    padding: 10,
    borderRadius: 100,
    left: 10,
    top: 13,
  },
  logoutfirstIcon: {
    backgroundColor: '#FFE5E5',
    position: 'absolute',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 100,
    left: 10,
    top: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    left: 70,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  profileBackBtn: {
    top: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
