import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import database,{ firebase } from '@react-native-firebase/database';
import PushNotification from 'react-native-push-notification';


interface IState {
  mobileNumber: number | string;
  isValidMobileNumber: boolean;
  passcode: string;
  users:any[];
  //isValidPass:boolean,
}
interface IProps {
  navigation?: any;
}
export default class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      mobileNumber: '',
      isValidMobileNumber: false,
      passcode: '',
      users:[],
      //isValidPass:false,
    };
  }
  createChannelID = () => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id-1',
        channelName: 'Channel Name',
        channelDescription: 'Channel Description',
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => {
        this.setState({ channelID: created.channelId });
      },
    );
  };

  handleMobileNumberChange = (mobileNumber: string) => {
    const isValidMobileNumber = /^\d{10}$/.test(mobileNumber);
    this.setState({mobileNumber, isValidMobileNumber});
  };

  handleSubmit = () => {
    const {mobileNumber, passcode, isValidMobileNumber,users} = this.state;
    const passReg = /^\d{6}$/;
   
    if (!isValidMobileNumber) {
      Alert.alert(`Mobile number ${mobileNumber} is invalid!`);
      this.setState({mobileNumber: ''});
    }
    if (!passReg.test(passcode)) {
      Alert.alert(`Passcode is invalid!`);
      this.setState({
        passcode: '',
      });
    } else {
      //Alert.alert(`Mobile number ${mobileNumber} is valid!`);
      const user = users.find((u) => u.mobileNumber === mobileNumber && u.passcode === passcode);
      if (user) {
        //Alert.alert(`Login Successfull`);
        this.props.navigation.navigate('OtpVerify');
        this.setState({mobileNumber: ''});
        this.setState({
          passcode: '',
        });
      } else {
        Alert.alert(`Login Failed`);
      }
     
    }
  };

  componentDidMount(): void {
    this.createChannelID();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    db.collection('users')
      .get()
      .then((querySnapshot) => {
        const users:any = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        this.setState({ users });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  render() {
    const {mobileNumber} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.child1}>
          <ImageBackground
            source={require('../images/login/bgresto.png')}
            resizeMode="stretch"
            style={styles.bgResto}>
            <Image
              style={styles.foodimg}
              source={require('../images/login/foobg.png')}
              resizeMode="stretch"
            />
            <View style={styles.heading}>
              <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>
                Login
              </Text>
              <Text style={{color: 'white', fontSize: 25}}>Welcome Back!</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.child2}>
          <View style={styles.phoneInput}>
            <PhoneInput
              testID="inputmobile"
              //ref={phoneInput}
              // defaultValue={this.state.value}
              defaultCode="IN"
              layout="first"
              //keyboardType="numeric"
              value={mobileNumber}
              onChangeText={this.handleMobileNumberChange}
              // onChangeFormattedText={text => {
              //   // setFormattedValue(text);
              // }}
              withDarkTheme
              //withShadow
              //autoFocus
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#000000',
                top: 15,
              }}>
              Passcode
            </Text>
            <OTPInputView
              testID="input-pass"
              style={{width: 200, height: 80, top: 20}}
              pinCount={6}
              code={this.state.passcode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              onCodeChanged={code => {
                this.setState({passcode: code});
              }}
              //autoFocusOnLoad
              placeholderCharacter="*"
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              // onCodeFilled={code => {
              //   console.log(`Code is ${code}, you are good to go!`);
              // }}
            />
            <Text
              testID="foregetPassBtn"
              style={{top: 10, color: 'red', left: 225}}
              onPress={() => this.props.navigation.navigate('OtpVerify')}>
              Forget Password
            </Text>
            <View style={{flexDirection: 'row', top: 20}}>
              <Image
                style={{height: 15, width: 15}}
                source={require('../images/login/bulCircle.png')}
                resizeMode="stretch"
              />
              <Text style={styles.customerLogin}>Customer</Text>
              <Image
                style={{height: 15, width: 15}}
                source={require('../images/login/bulCircle.png')}
                resizeMode="stretch"
              />
              <Text style={styles.customerLogin}>Seller</Text>
            </View>

            <TouchableOpacity
              testID="login-btn"
              style={styles.loginbtn}
              onPress={this.handleSubmit}
              //disabled={!isValidMobileNumber}
            >
              <Text style={styles.logintext}>Login</Text>
            </TouchableOpacity>
            <Text
              testID="go-register"
              style={styles.regButton}
              onPress={() => this.props.navigation.navigate('Register')}>
              Register Now?
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //position: 'absolute',
    height: '100%',
    width: '100%',
  },
  child1: {
    height: '60%',
    width: '100%',
    bottom: 150,
  },
  child2: {
    position: 'absolute',
    height: '40%',
    width: '100%',
    top: 70,
    zIndex: -1,
    //backgroundColor:'red'
  },
  bgResto: {
    height: 500,
    width: '100%',
  },
  foodimg: {
    position: 'relative',
    left: 160,
    top: 150,
    height: 400,
  },
  heading: {
    bottom: 50,
    left: 20,
  },
  phoneInput: {
    width: '100%',
    top: 325,
    left: 40,
  },
  borderStyleBase: {
    width: 40,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderBottomWidth: 1,
    color: '#000000',
    marginHorizontal: 3,
    left: -10,
  },

  underlineStyleHighLighted: {
    borderColor: '#000000',
  },
  inputPass: {
    //backgroundColor:'red',
    borderWidth: 1,
    borderColor: '#3e3e3e',
    position: 'absolute',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    color: '#000000',
  },
  logintext: {
    fontSize: 25,
    alignSelf: 'center',
    //fontWeight:'bold',
    color: '#ffffff',
  },
  loginbtn: {
    backgroundColor: '#DF201F',
    marginHorizontal: 30,
    paddingVertical: 10,
    left: -40,
    top: 40,
    padding: 7,
    borderRadius: 40,
  },
  customerLogin: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
    marginHorizontal: 10,
    top: -3,
  },
  regButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    top: 65,
    left: 110,
  },
});
