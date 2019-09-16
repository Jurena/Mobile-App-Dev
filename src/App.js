/*Made with the the guidance of:
https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
*/ 
import React, {Component} from 'react';
import './App.css';
import List from './list'

//create a component with state and render 
//methods
export default class App extends Component{
  constructor(props){
    super(props); 
    this.state = {
        term:'', //to store a value to our input
        items:[] //to store every task on our todo list
    };
  }

  //func changes the state depending on the input value
  //paired with this.setState(), triggers UI updates
  onChange = (event) => {
    this.setState({term: event.target.value}); 
  }

    //onSubmit cleans the input field after a button click, pushes the term to the 
  //items array (along with the old array of terms), and preventDefault
  //stops the default action of an element
  onSubmit = (event) => {
    event.preventDefault(); 
    this.setState({
      term:'', 
      //iterably adds elemnents from the prior state, and the newly added term
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return ( 
        <div>
          <h1>Joel's ToDo List 09/16 </h1>  
          <form className="App" onSubmit={this.onSubmit}>
            <input value= {this.state.term} onChange={this.onChange}/>
            <button>Submit</button> 
          </form>
        <List items={this.state.items}/>
        </div> 
    );      
    }
}

