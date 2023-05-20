import {
    fireEvent,
    render,

  } from '@testing-library/react-native';
  import renderer from 'react-test-renderer';
import AllowLocation from '../components/AllowLocation';

 

describe('home component', () => {
    it('renders correctly', () => {
      renderer.create(<AllowLocation />);
    });
    it('to check app render correctly', () => {
      const appRender = render(<AllowLocation />);
      expect(appRender).toMatchSnapshot();
      expect(appRender).toBeDefined();  
    });

    it('check permission button',()=>{
      const navigation={navigate:jest.fn()}
      const {getByTestId}=render(<AllowLocation navigation={navigation}/>);
        const allow= getByTestId('allowBtn');
        fireEvent.press(allow);
        expect(navigation.navigate).toHaveBeenCalledTimes(1);
    });

})  