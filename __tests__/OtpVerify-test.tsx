import {
    fireEvent,
    render,

  } from '@testing-library/react-native';
  import renderer from 'react-test-renderer';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import OtpVerify from '../components/OtpVerify';

jest.mock('@twotalltotems/react-native-otp-input',()=>'OtpVerify');  

describe('home component', () => {
    it('renders correctly', () => {
      renderer.create(<OtpVerify />);
    });
    it('to check app render correctly', () => {
      const appRender = render(<OtpVerify />);
      expect(appRender).toMatchSnapshot();
      expect(appRender).toBeDefined();  
    });

})  