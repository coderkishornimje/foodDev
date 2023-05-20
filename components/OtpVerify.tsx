import {Text, StyleSheet, View, Image, Alert} from 'react-native';
import React, {Component} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

interface IState {
  otp: string;
}
interface IProps {
  navigation?: any;
}
var newotp:number = Math.floor(1000 + Math.random() * 9000);
   
export default class OtpVerify extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      otp: '',
    };
  }

  generateOTP = () => {
    //var newotp = Math.floor(1000 + Math.random() * 9000);
    PushNotification.localNotification({
      channelId: 'channel-id-1',
      title: 'OTP For Verify the User',
      message: `Your OTP is ${newotp}`,
    });
  };
  componentDidMount(): void {
    this.generateOTP();
  }
  handleSubmit = () => {
    if(this.state.otp==newotp)
    {
    this.props.navigation.navigate('TabContainer');
    Alert.alert('Login Successfull');
    console.log('Done');
    }
    else{
      Alert.alert('Invalid OTP')
      console.log('not okay');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
          <Text style={styles.heading}>OTP Verification</Text>
          <Image
            style={{height: 100, width: 100, marginTop: 30}}
            source={require('../images/OTP/emailPic.png')}
            resizeMode="stretch"
          />
        </View>
        <Text style={styles.subText}>Enter The OTP sent to</Text>
        <Text style={styles.subText}>9876543210</Text>
        <View style={{alignSelf: 'center'}}>
          <OTPInputView
            style={{width: 200, height: 80, top: 20}}
            pinCount={4}
             code={this.state.otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={code => {
              this.setState({otp:code});
            }}
            //autoFocusOnLoad
            //codeInputFieldStyle={styles.underlineStyleBase}
            //codeInputHighlightStyle={styles.underlineStyleHighLighted}
            // onCodeFilled={code => {
            //   console.log(`Code is ${code}, you are good to go!`);
            // }}
          />
        </View>
        <View style={styles.rensendOTP}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#ffffff',
              right: 30,
              top: 10,
            }}>
            Resend OTP
          </Text>
          <View style={styles.reload}>
            <Image
              style={{height: 15, width: 15, marginTop: 30, top: -15}}
              source={require('../images/OTP/reload.png')}
              resizeMode="stretch"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loginbtn} onPress={this.handleSubmit}>
          <Text style={styles.logintext}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f70f0f',
  },
  child1: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
  },
  heading: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 20,
    color: '#ffffff',
    alignSelf: 'center',
  },
  reload: {
    position: 'absolute',
    backgroundColor: '#b50d0d',
    borderRadius: 100,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    left: 100,
  },
  rensendOTP: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  logintext: {
    fontSize: 25,
    alignSelf: 'center',
    //fontWeight:'bold',
    color: '#ffffff',
  },
  loginbtn: {
    backgroundColor: '#94CD00',
    marginHorizontal: 40,
    // left: -40,
    top: 0,
    padding: 7,
    borderRadius: 40,
    margin: '60%',
  },
});
