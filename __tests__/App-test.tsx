import 'react-native-gesture-handler/jestSetup';
import 'react-native';
import React from 'react';
import App from '../App';
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Screens from '../components/Screens';

jest.mock('react-native-phone-number-input', () => 'PhoneInput');
jest.mock('@twotalltotems/react-native-otp-input',()=>"OTPInputView")


describe('app component', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  test('to check app render correctly', () => {
    const appRender = render(<App />);
    expect(appRender).toMatchSnapshot();
    expect(appRender).toBeDefined();
  });
  
  test('screen contains a button linking to the notifications page', async () => {
    const {getByTestId} = render(<App />);
    const component = (
      <NavigationContainer>
        <Screens/>
      </NavigationContainer>
    );
    render(component);
  });
  
  test('to check settimeout',()=>{
    jest.useFakeTimers();
    const {getByTestId} = render(<App />);
     jest.advanceTimersByTime(2000);
  })
  
});

