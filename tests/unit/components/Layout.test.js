import Layout from '../../../src/components/app/Layout';
import {shallow, mount} from 'enzyme';

test(() => {
  const shallowLayout = shallow(<Layout />);

  expect(shallowLayout.find('div').length).toBe(5);
});