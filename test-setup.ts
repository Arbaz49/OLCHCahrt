import "@testing-library/jest-dom";
import "@testing-library/jest-native/extend-expect";
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });