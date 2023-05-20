import {
  fireEvent,
    render,

  } from '@testing-library/react-native';
  import renderer from 'react-test-renderer';
import OnboardScreen from '../components/OnboardScreen';

describe('home component', () => {
    it('renders correctly', () => {
      renderer.create(<OnboardScreen />);
    });
    it('to check app render correctly', () => {
      const appRender = render(<OnboardScreen />);
      expect(appRender).toMatchSnapshot();
      expect(appRender).toBeDefined();
    });
    it('check skip button',()=>{
      const navigation={navigate:jest.fn()}
      const {getByTestId}=render(<OnboardScreen navigation={navigation}/>);
      const skipoption=getByTestId('skip-btn');
      fireEvent.press(skipoption);
      expect(navigation.navigate).toHaveBeenCalledTimes(1);
    })
    it('check settimeout home page',()=>{
        jest.useFakeTimers();
        const appRender = render(<OnboardScreen />);
         jest.advanceTimersByTime(2000);
         jest.advanceTimersByTime(2000);
         jest.advanceTimersByTime(2000);
        expect(appRender).toBeDefined();
    });

})  