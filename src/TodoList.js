import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hello',
      list: ['learn english', 'learn react']
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  
  render() {
    return (
      <Fragment>
      {
        //下面是一个input框
      }
      {/*下面是一个input框*/}
        <label htmlFor="insertArea">输入内容</label>
        <input 
          id="insertArea"
          className='input'
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> 
        <button onClick={this.handleBtnClick}>submit</button>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
      return this.state.list.map((item, index) => {
          return (
              <div key={index}>
                  <TodoItem
                      content={item}
                      index={index}
                      deleteItem={this.handleItemDelete}
                  />

                  {/*<li
                  key={index}
                  onClick={this.handleItemDelete.bind(this, index)}
                  dangerouslySetInnerHTML={{__html: item}}
                >
                </li>*/}
              </div>
          )
      })
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
      const value = e.target.value;
      this.setState(()=>({
          inputValue: value
      }))
  }

  handleBtnClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
      this.setState((prevState) => ({
          list: [...prevState.list, prevState.inputValue],
          inputValue: ''
      }))
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变ß
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // })
    //   this.setState(() => ({
    //       list
    //   }));
      //返回js语句就直接用{},返回object就要用({})
    this.setState((prevState) => {
        const list = [...prevState.list];
        list.splice(index, 1);
        return {list};
    });
  }
}

export default TodoList;
