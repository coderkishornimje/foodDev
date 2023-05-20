import {
    fireEvent,
    render,

  } from '@testing-library/react-native';
  import renderer from 'react-test-renderer';
import Screens from '../components/Screens';

//jest.mock('@react-navigation/stack',()=>'createStackNavigator');

// jest.mock('react-native-phone-number-input', () => 'PhoneInput');
// jest.mock('@twotalltotems/react-native-otp-input',()=>"OTPInputView")

describe('home component', () => {
    it('renders correctly', () => {
      renderer.create(<Screens />);
    })
    it('to check app render correctly', () => {
      const appRender = render(<Screens />);
      expect(appRender).toMatchSnapshot();
      expect(appRender).toBeDefined();  
    });
})  