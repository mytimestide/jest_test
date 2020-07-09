import React from 'react';
import Enzyme, { shallow,mount } from 'enzyme'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new Adapter()})
test('renders learn react link', () => {
  // const div =document.createElement('div');
  // ReactDOM.render(<App />,div)
  // const container = div.getElementsByClassName('App')
  // expect(container.length).toBe(2)
  // const wrapper = shallow(<App />)
  // console.log(expect(wrapper.find('.App')));
  const wrapper = mount(<App />)
  expect(wrapper).toMatchSnapshot()
  // const container = wrapper.find('[data-test="container"]')
  // expect(container).toExist();
  // expect(container).toHaveProp('title','times');
});
