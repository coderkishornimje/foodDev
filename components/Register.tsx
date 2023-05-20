import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
const {width, height} = Dimensions.get('window');
import PhoneInput from 'react-native-phone-number-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
//import firebase from 'firebase';
import database,{ firebase } from '@react-native-firebase/database';
import { Dropdown } from 'react-native-element-dropdown';
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('users');

interface IState {
  name: string;
  email: string;
  mobileNumber:string;
  isValidMobileNumber: boolean;
  password: number | string;
  data:any[];
  statename:null;
  isFocus:boolean;
}
interface IProps {
  navigation?: any;
}
export default class Register extends Component<IProps, IState> {
  constructor(Props: IProps) {
    super(Props);
    this.state = {
      name: '',
      email: '',
      mobileNumber: '',
      isValidMobileNumber: false,
      password: '',
      data:[
        { label: 'Maharashtra', value: '1' },
        { label: 'Karnataka', value: '2' },
        { label: 'Rajastan', value: '3' },
        { label: 'Hariyana', value: '4' },
        { label: 'Bangal', value: '5' },
        { label: 'UttarPradesh', value: '6' },
        { label: 'AndhraPradesh', value: '7' },
        { label: 'Tamilnadu', value: '8' },
      ],
      statename:null,
      isFocus:false,
    };
  }

  handleMobileNumberChange = (mobileNumber: string) => {
    const isValidMobileNumber = /^\d{10}$/.test(mobileNumber);
    this.setState({mobileNumber, isValidMobileNumber});
  };

  handleSubmit = () => {
    const {name, email, mobileNumber, isValidMobileNumber, password} =
      this.state;

    const nameRegex = /^[a-zA-Z ]{2,30}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passReg = /^\d{6}$/;

    if (!nameRegex.test(name)) {
      Alert.alert('Invalid Name', 'Please enter a valid name');
      return;
    }

    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    if (!isValidMobileNumber) {
      Alert.alert(`Mobile number ${mobileNumber} is invalid!`);
      //this.setState({mobileNumber:''});
      return;
    }
    if (!passReg.test(password)) {
      Alert.alert('Invalid Password', 'Please enter a valid Password ');
      return;
    } else {
      firestore()
      .collection('users')
      .doc(mobileNumber)
      .set({
        name: name,
        mobileNumber:mobileNumber,
        email:email,
        passcode:password,
        state:statename,
      })
      .then(() => {
        console.log('User added!');
      });
     
      Alert.alert('You Have Successfully Register into Account');
      this.props.navigation.navigate('Login');
    }
  };
  
  render() {
    const db = firebase.database();
    const {name, email, password,value,isFocus,data} = this.state;
    return (
      // <Image source={require('../images/login/bgresto.png')} style={styles.bgResto}/>
      <SafeAreaView style={styles.container}>
        <View style={styles.child1}>
          <ImageBackground
            source={require('../images/login/bgresto.png')}
            resizeMode="stretch"
            style={styles.bgResto}>
            <View style={{flexDirection: 'row', top: 40,}}>
              <Image
                style={{height: 15, width: 15, top: 240, left: 20}}
                source={require('../images/login/backArrow.png')}
                resizeMode="stretch"
              />
              <Text onPress={()=>this.props.navigation.navigate('Login')}
                style={{
                  fontSize: 30,
                  color: '#ffffff',
                  top: 225,
                  left: 35,
                  fontWeight: 'bold',
                }}>
                Register
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child2}>
          <View style={styles.nameFrame}>
            {/* <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000000'}}>
              Name
            </Text> */}
            <TextInput
              testID="input-name"
              onChangeText={e => this.setState({name: e})}
              value={name}
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000000',
                height: 40,
              }}
              placeholder="Name"
            />
            <Image
              style={{height: 15, width: 15, top: 15}}
              source={require('../images/login/menlogo.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.phoneFrame}>
            <PhoneInput
              testID="input-phone"
              //ref={phoneInput}
              // defaultValue={value}
              defaultCode="IN"
              layout="first"
              value={this.state.mobileNumber}
              onChangeText={this.handleMobileNumberChange}
              // onChangeFormattedText={text => {
              //   // setFormattedValue(text);
              // }}
              withDarkTheme
              //withShadow
              //autoFocus
            />
          </View>
          <View style={styles.nameFrame}>
            {/* <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000000'}}>
              Email id
            </Text> */}
            <TextInput
              testID="input-email"
              onChangeText={e => this.setState({email: e})}
              value={email}
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000000',
                height: 40,
              }}
              placeholder="Email Id"
            />
            <Image
              style={{height: 15, width: 15, top: 15}}
              source={require('../images/login/emaillogo.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.passFrame}>
            <Text style={{top: 20, fontWeight: 'bold', color: '#000000'}}>
              Passcode
            </Text>
            <OTPInputView
              testID="input-pass"
              style={{width: 200, height: 80, top: 20}}
              pinCount={6}
              code={this.state.password} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              onCodeChanged={e => this.setState({password: e})}
              //autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              placeholderCharacter="*"
              placeholderTextColor="#000000"
              // onCodeFilled={code => {
              //   console.log(`Code is ${code}, you are good to go!`);
              // }}
            />
            <Text style={{top: 20, fontWeight: 'bold', color: '#000000'}}>
              Confirm Passcode
            </Text>
            <OTPInputView
              style={{width: 200, height: 80, top: 20}}
              pinCount={6}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              //autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              placeholderCharacter="*"
              placeholderTextColor="#000000"
              // onCodeFilled={code => {
              //   console.log(`Code is ${code}, you are good to go!`);
              // }}
            />
          </View>
          {/* <View style={styles.stateFrame}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000000'}}>
              State
            </Text>
            <Image
              style={{height: 15, width: 15}}
              source={require('../images/downArrow.png')}
              resizeMode="stretch"
            />
          </View> */}
          <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'State' : '...'}
              searchPlaceholder="Search..."
              dropdownPosition='top'
              value={value}
              onFocus={() => this.setState({isFocus:true})}
              onBlur={() => this.setState({isFocus:true})} 
              // onChange={function (item: any): void {
              //   throw new Error('Function not implemented.');
              // } }          
              onChange={item => {
            this.setState({value:item.value});
            this.setState({isFocus:false});
          }}
          // renderLeftIcon={() => (
          //   <AntDesign
          //     style={styles.icon}
          //     color={isFocus ? 'blue' : 'black'}
          //     name="Safety"
          //     size={20}
          //   />
          // )}
        />
          <View style={{left: 50}}>
            <View style={{position: 'absolute', backgroundColor: 'red'}}>
              <Image
                style={{height: 15, width: 15}}
                source={require('../images/rightArraw.png')}
                resizeMode="stretch"
              />
            </View>
            <Text
              style={{
                marginHorizontal: 20,
                bottom: 5,
                fontSize: 15,
                color: '#000000',
              }}>
              Agree Term And Conditions
            </Text>
          </View>
          <TouchableOpacity
            testID="register-btn"
            style={styles.registerbtn}
            onPress={this.handleSubmit}>
            <Text style={styles.logintext}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor:'#ffffff'
  },
  child1: {
    height: '20%',
    width: '100%',
    bottom: 200,
  },
  child2: {
    height: '80%',
    width: '100%',
    zIndex: -1,
    top: 50,
  },
  bgResto: {
    height: 350,
    width: '105%',
    //resizeMode: 'cover',
  },
  nameFrame: {
    flexDirection: 'row',
    backgroundColor: '#e3e8e5',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 7,
    padding: 10,
    height: 50,
  },
  borderStyleBase: {
    width: 40,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderBottomWidth: 1,
    color: '#000000',
    borderColor: '#000000',
    marginHorizontal: 8,
  },

  underlineStyleHighLighted: {
    borderColor: '#000000',
  },
  passFrame: {
    // backgroundColor: '#e3e8e5',
    //justifyContent: 'space-between',
    bottom: 20,
    marginHorizontal: 20,
    marginBottom: 7,
    padding: 10,
    //height:200
  },
  logintext: {
    fontSize: 25,
    alignSelf: 'center',
    //fontWeight:'bold',
    color: '#ffffff',
  },
  registerbtn: {
    backgroundColor: '#94CD00',
    marginHorizontal: 40,
    padding: 7,
    top: 20,
    borderRadius: 40,
  },
  stateFrame: {
    flexDirection: 'row',
    backgroundColor: '#e3e8e5',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 7,
    padding: 10,
    bottom: 20,
  },
  phoneFrame: {
    flexDirection: 'row',
    backgroundColor: '#e3e8e5',
    //justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 7,
    //padding: 10,
  },
  dropdown: {
    height: 45,
    borderColor: '#3e3e3e',
    borderWidth: 0.5,
    //borderRadius: 8,
    paddingHorizontal: 8,
    marginHorizontal:25,
    top:-15,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
