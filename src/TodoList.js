import React, { Component, Fragment } from 'react';
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hello',
      list: ['learn english', 'learn react']
    }
  }
  
  render() {
    return (
      <Fragment>
      {
        //下面是一个input框
      }
      {/*下面是一个input框*/}
        <input 
          className='input'
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
        /> 
        <button onClick={this.handleBtnClick.bind(this)}>submit</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li 
                  key={index} 
                  onClick={this.handleItemDelete.bind(this, index)}
                >
                  {item}
                </li>
                )
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    // immutable
    // state 不允许我们做任何的改变ß
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default TodoList;
