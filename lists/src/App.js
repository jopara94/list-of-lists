import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentList: '',
      lists: []
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.createShoppingList = this.createShoppingList.bind(this)
  }

  handleInputChange(event) {
    let name = event.target.name
    let value = event.target.value

    this.setState({ [name] : value })
  }


  createShoppingList() {
    let lists = this.state.lists
    let currentList = this.state.currentList
    lists.push(currentList)

    this.setState({ lists: lists })
  }


  render() {

    return (
      <div id="createListDiv">
          <h1>Simple Shopping List</h1>
          <br></br>
          <br></br>
              <input id='listNames' type="text" name="currentList" placeholder="New List" onChange={this.handleInputChange} ></input>
              <button onClick={this.createShoppingList}>Create</button>
              

              {this.state.lists.map((currentList) => {
                return (
                  <li>{currentList} <button onClick={this.viewLink}>View</button></li>
                )
              })}
          </div>
    )
  }
  
}

export default App;
