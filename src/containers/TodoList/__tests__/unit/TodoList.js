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
    expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
});


test('当 Header 回车时，undoList 应该新增内容', () => {
    const wrapper = shallow(<TodoList />);
    const Header = wrapper.find('Header')
    const addFunc = Header.prop('addUndoItem');
    const inputElem = wrapper.find("[data-test='input']");
    addFunc('学习 JEST')
    // expect().toBe(wrapper.instance().addUndoItem)
    expect(wrapper.state('undoList').length).toBe(1)
    expect(wrapper.state('undoList')[0]).toBe('学习 JEST')
    addFunc('学习 JEST2')
    expect(wrapper.state('undoList').length).toBe(2)
    // expect(inputElem.prop('value')).toBe('')
});
