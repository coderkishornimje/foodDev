import {
    fireEvent,
    render,

  } from '@testing-library/react-native';
  import renderer from 'react-test-renderer';
import Splash from '../components/Splash';


  

describe('home component', () => {
    it('renders correctly', () => {
      renderer.create(<Splash />);
    });
    it('to check app render correctly', () => {
      const appRender = render(<Splash />);
      expect(appRender).toMatchSnapshot();
      expect(appRender).toBeDefined();  
    });

})  