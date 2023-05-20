import {
    fireEvent,
    render,

  } from '@testing-library/react-native';
  import renderer from 'react-test-renderer';
import Register from '../components/Register';

jest.mock('react-native-phone-number-input',()=>'PhoneInput');
jest.mock('@twotalltotems/react-native-otp-input',()=>'OTPInputView');


describe('home component', () => {
    it('renders correctly', () => {
      renderer.create(<Register />);
    });
    it('to check app render correctly', () => {
      const appRender = render(<Register />);
      expect(appRender).toMatchSnapshot();
      expect(appRender).toBeDefined();  
    });
    
    test('name validation', () => {
      const { getByTestId, getByText } = render(<Register />);
      const input = getByTestId('input-name');
      const button = getByTestId('register-btn');
  
      fireEvent.changeText(input, 'kishornimje');
      
      fireEvent.press(button);
  
      expect(input.props.value).toBe('kishornimje')
    });

    test('email validation', () => {
      const { getByTestId, getByText } = render(<Register />);
      const input = getByTestId('input-email');
      const button = getByTestId('register-btn');
  
      fireEvent.changeText(input, 'kishornimje@gmail.com');
      
      fireEvent.press(button);
  
      expect(input.props.value).toBe('kishornimje@gmail.com')
    });

    test('mobile number validation', () => {
      const { getByTestId, getByText } = render(<Register />);
      const input = getByTestId('input-phone');
      const button = getByTestId('register-btn');
  
      fireEvent.changeText(input, '9876543210');
      
      fireEvent.press(button);
  
      expect(input.props.value).toBe('9876543210')
    });

    test('password number validation', () => {
      const { getByTestId, getByText } = render(<Register />);
      const passcode=getByTestId('input-pass')
      const password ='123456'
      const button = getByTestId('register-btn');
      
      //fireEvent.changeText(input, '123456');
      passcode.props.onCodeChanged(password)
      
      fireEvent.press(button);
    });
  
})  