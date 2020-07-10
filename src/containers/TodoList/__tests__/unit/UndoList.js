import React from 'react';
import  { shallow,mount } from 'enzyme'
import { findTestWrapper } from '../../../../utils/testUtils'
import UndoList from '../../components/UndoList';


// test('Header 渲染样式正常',()=>{
//     const wrapper = shallow(<Header />)
//     expect(wrapper).toMatchSnapshot();
// })

test('未完成列表初始化，count数量为0',()=>{
    const wrapper = shallow(<UndoList list={[]} />)
    const countElem = findTestWrapper(wrapper,'count');
    const listItems = findTestWrapper(wrapper,'list-item')
    expect(countElem.text()).toEqual("0")
    expect(listItems.length).toEqual(0)
})


it('未完成列表当数据有内容是 count数目显示数据长度，列表不为空',()=>{
    const listData = ['学习Jest','学习TDD','学习单元测试']
    const wrapper = shallow(<UndoList list={listData} />)
    const countElem = findTestWrapper(wrapper,'count');
    const listItems = findTestWrapper(wrapper,'list-item')
    expect(countElem.text()).toEqual("3")
    expect(listItems.length).toEqual(3)
})


it('未完成列表当数据有内容时，要存在删除按钮',()=>{
    const listData = ['学习Jest','学习TDD','学习单元测试']
    const wrapper = shallow(<UndoList list={listData} />)
    const deleteItems = findTestWrapper(wrapper,'delete-item');
    expect(deleteItems.length).toEqual(3)
})

it('未完成列表当数据有内容时，点击删除按钮，会调用删除方法',()=>{
    const listData = ['学习Jest','学习TDD','学习单元测试'];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList list={listData} deleteItem={fn}/>)
    const deleteItems = findTestWrapper(wrapper,'delete-item');
    deleteItems.at(index).simulate('click');
    expect(fn).toHaveBeenLastCalledWith(index);
})

it('todoList应该给未完成列表传递List数据，以及deleteItem方法',()=>{
    const wrapper = shallow(<UndoList />)
    const UndoList  = wrapper.find('UndoList')
    expect(UndoList.prop('list')).toBeTruthy();
    expect(UndoList.prop('deleteItem')).toBeTruthy();
})

it('当deleteItem方法被执行是，undoList应该删除内容',()=>{
    const wrapper = shallow(<UndoList />)
    wrapper.setState({
        UndoList: ['学习Jest','学习TDD','学习单元测试']
    });
    wrapper.instance().deleteItem(1);
    expect(wrapper.state('undoList')).toEqual([['学习Jest','学习单元测试'])
})
