import React, { Component } from 'react';
import Header from './components/Header'
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            undoList: []
        }
    }

    addUndoItem = (value)=>{
            this.setState({
                undoList: [...this.state.undoList,value]
            })
    }

    render(){
        const { undoList } = this.state
        return  <div className="App" data-test="container" title="times">
            <Header addUndoItem={this.addUndoItem}/>
            {undoList.map((item,index)=>{
                return <div key={index} >{item}</div>
            })}
        </div>
    }
}

export default TodoList;
