import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Image} from 'react-native-elements';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Editprofile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.child1}>
        <TouchableOpacity
            style={styles.editfromBackBtn}
            onPress={() => this.props.navigation.navigate('TabContainer')}>
            <Image
              style={{height: 15, width: 15}}
              source={require('../../images/back.png')}
              resizeMode="stretch"
            />
            <Text style={styles.heading}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
        <View style={styles.child2}>
          <View style={{height: 156, width: 156}}>
            <Image
              style={styles.profileimg}
              source={require('../../images/home/profile.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.cameraoption}>
            <Image
              style={{height: 20, width: 20}}
              source={require('../../images/profile/camera.png')}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View style={styles.child3}>
          <View style={styles.nameFrame}>
            {/* <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000000'}}>
              Name
            </Text> */}
            {/* <TextInput testID='input-name'
              //onChangeText={e => this.setState({name: e})}
              //value={name}
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000000',
                height: 40,
              }}
              placeholder="kishor nimje"
            /> */}
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
              kishor nimje
            </Text>
            <Image
              style={{height: 15, width: 20, top: 15}}
              source={require('../../images/login/menlogo.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.nameFrame}>
            {/* <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000000'}}>
              Name
            </Text> */}
            {/* <TextInput testID='input-name'
              //onChangeText={e => this.setState({name: e})}
              //value={name}
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000000',
                height: 40,
              }}
              placeholder="kishor nimje"
            /> */}
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
              9876543210
            </Text>
            <Image
              style={{height: 15, width: 20, top: 15}}
              source={require('../../images/login/menlogo.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.nameFrame}>
            {/* <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000000'}}>
              Name
            </Text> */}
            {/* <TextInput testID='input-name'
              //onChangeText={e => this.setState({name: e})}
              //value={name}
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000000',
                height: 40,
              }}
              placeholder="kishor nimje"
            /> */}
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>
              kishornimje456@gmail.com
            </Text>
            <Image
              style={{height: 15, width: 20, top: 15}}
              source={require('../../images/login/emaillogo.png')}
              resizeMode="stretch"
            />
          </View>
        </View>
        <View style={styles.passFrame}>
          <Text style={{fontWeight: 'bold', color: '#000000',fontSize:15}}>
           Old Passcode
          </Text>
          <OTPInputView
            //testID="input-pass"
            style={{width: 200, height: 80,top:-10}}
            placeholderCharacter='*'
            pinCount={6}
            //code={this.state.password} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={e => this.setState({password: e})}
            //autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // onCodeFilled={code => {
            //   console.log(`Code is ${code}, you are good to go!`);
            // }}
          />
        </View>
        <View style={styles.newpassFrame}>
          <Text style={{fontWeight: 'bold', color: '#000000',fontSize:15}}>
           New Passcode
          </Text>
          <OTPInputView
            //testID="input-pass"
            style={{width: 200, height: 80,top:-10}}
            placeholderCharacter='*'
            pinCount={6}
            //code={this.state.password} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={e => this.setState({password: e})}
            //autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // onCodeFilled={code => {
            //   console.log(`Code is ${code}, you are good to go!`);
            // }}
          />
        </View>
        <View style={styles.confpassFrame}>
          <Text style={{fontWeight: 'bold', color: '#000000',fontSize:15}}>
           Confirm Passcode
          </Text>
          <OTPInputView
            //testID="input-pass"
            placeholderCharacter='*'
            style={{width: 200, height: 80,top:-10}}
            pinCount={6}
            //code={this.state.password} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={e => this.setState({password: e})}
            //autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // onCodeFilled={code => {
            //   console.log(`Code is ${code}, you are good to go!`);
            // }}
          />
          <TouchableOpacity
              style={styles.editbtn}
              >
              <Text style={styles.edittext}>SAVE PROFILE</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5',
  },
  child1: {
    height: '10%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  child2: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  child3: {
    height: '25%',
    //top: 10,
  },
  passFrame: {
    marginHorizontal: 20,
    marginBottom: 7,
  },
  newpassFrame:{
    marginHorizontal: 20,
    marginBottom: 7,
    top:-20
  },
  confpassFrame:{
    marginHorizontal: 20,
    marginBottom: 7,
    top:-40
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  profileimg: {
    height: '100%',
    width: '100%',
  },
  cameraoption: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 100,
    top: -60,
    left: 40,
  },
  nameFrame: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    borderBottomWidth: 0.5,
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderBottomWidth: 1,
    color:'#000000',
    borderColor:'#000000',
    marginHorizontal:12
  },

  underlineStyleHighLighted: {
    borderColor: '#000000',
  },
  editbtn: {
    backgroundColor: '#94CD00',
    padding: 7,
    borderRadius: 50,
    paddingHorizontal:40,
    paddingVertical:12,
    marginHorizontal:18
  },
  edittext: {
    fontSize: 20,
    alignSelf: 'center',
    //fontWeight:'bold',
    color: '#ffffff',
  },
  editfromBackBtn:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top:15,
    left:10
  },
});
