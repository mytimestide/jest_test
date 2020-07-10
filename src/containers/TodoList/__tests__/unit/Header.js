import React from 'react';
import Enzyme, { shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../../components/Header';

Enzyme.configure({adapter: new Adapter()})
// test('Header组件包含一个input框,初始化应该为空', () => {
//     const wrapper = shallow(<Header />)
//     const inputElem = wrapper.find("[data-test='input']");
//     expect(inputElem.prop('value')).toEqual('')
// });

test('Header 渲染样式正常',()=>{
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
})

test('Header组件包含一个input框,当用户输入是，会跟随变化', () => {
    const wrapper = shallow(<Header />)
    const inputElem = wrapper.find("[data-test='input']");
    const userInput = '今天要学习Jest';
    inputElem.simulate('change',{
        target:{
            value: '今天要学习Jest'
        }
    })
    expect(wrapper.state('value')).toEqual(userInput)
    const newInputElem = wrapper.find("[data-test='input']")
});

test('Header组件input框输入回车时，如果input无内容，无操作', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn}/>)
    const inputElem = wrapper.find("[data-test='input']");
    wrapper.setState({value: ''})
    inputElem.simulate('keyUp',{
        keyCode: 13
    });
    expect(fn).not.toHaveBeenCalled()
});

test('Header组件input框输入回车时，如果input有内容，无操作', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn}/>)
    const inputElem = wrapper.find("[data-test='input']");
    const userInput = '学习 React'
    wrapper.setState({value: userInput})
    inputElem.simulate('keyUp',{
        keyCode: 13
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenLastCalledWith(userInput);
});


test('Header组件input框输入回车时，如果input有内容，最后应该清除', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn}/>)
    const inputElem = wrapper.find("[data-test='input']");
    const userInput = '学习 React'
    wrapper.setState({value: userInput})
    inputElem.simulate('keyUp',{
        keyCode: 13
    });
    const newInputElem = wrapper.find("[data-test='input']");
    expect(newInputElem.prop('value')).toBe('')
});
