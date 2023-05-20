import {fireEvent, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Login from '../components/OnboardScreen';

jest.mock('react-native-phone-number-input',()=>'PhoneInput')
jest.mock('@twotalltotems/react-native-otp-input', () => 'OTPInputView');
describe('home component', () => {
  it('renders correctly', () => {
    renderer.create(<Login />);
  });
  it('to check app render correctly', () => {
    const appRender = render(<Login />);
    expect(appRender).toMatchSnapshot();
    expect(appRender).toBeDefined();
  });

  // test('mobile number validation', () => {
  //   const navigation={navigate:jest.fn()}
  //   const {getByTestId}=render(<Login navigation={navigation}/>);
  //  // const { getByTestId, getByText } = render(<Login />);
  //   const input = getByTestId('go-register');
 
  //   fireEvent.press(input);
  //   expect(navigation.navigate).toHaveBeenCalledTimes(1);
  // });

  test('mobile number validation', () => {
    const { getByTestId, getByText } = render(<Login />);
      const input = getByTestId('inputmobile');
      const button = getByTestId('login-btn');
  
      input.props.onChangeText('9876543210')
      
      fireEvent.press(button);
  
      //expect(input.props.value).toBe('9876543210')
  });
});
