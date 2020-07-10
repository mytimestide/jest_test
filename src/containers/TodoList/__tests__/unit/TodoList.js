import React from 'react';
import  { shallow,mount } from 'enzyme'
import TodoList from '../../index';

test('toDoList 初始化列表为空', () => {
    const wrapper = shallow(<TodoList />)
    expect(wrapper.state('undoList')).toEqual([])
});

test('toDoList 应该给Header 传递一个增加undoList 内容的方法', () => {
    const wrapper = shallow(<TodoList />);
    const Header = wrapper.find('Header')
    expect(Header.prop('addUndoItem')).toBeTruthy()
});


test('当 Header 回车时，undoList 应该新增内容', () => {
    const wrapper = shallow(<TodoList />);
    wrapper.instance().addUndoItem('学习 React')
    expect(wrapper.state('undoList').length).toBe(1)
    expect(wrapper.state('undoList')[0]).toBe('学习 React')
    wrapper.instance().addUndoItem('学习 React2')
    expect(wrapper.state('undoList').length).toBe(2)
    // expect(inputElem.prop('value')).toBe('')
});
