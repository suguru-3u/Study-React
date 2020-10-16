import React,{Component} from 'react';
import Rect from './Rect';
import './App.css';

let data = {title:'Title',
  message:'this is sample message.'};

const SmapleContext = React.createContext(data);

let theme = {
  ligth:{
    backgroundColor:"#eef",
    color:"#006",
    padding:"10px"
  },
  dark:{
    backgroundColor:"#006",
    color:"#eef",
    padding:"10px"
  }
};

const ThemeContext = React.createContext(theme.dark);


class App extends Component{
  static contextType = ThemeContext;

  render(){
    return(
      <div style={this.context}>
        <h1>Context</h1>
        <Title value="Content page"/>
        <Message value="This is Content sample"/>
        <Message value="#これはテーマのサンプルです。"/>
      </div>
    );
  }
}

class Title extends Component{
  static contextType = ThemeContext;

  render(){
    return (
      <div>
        <h2　style={this.context}>{this.props.value}</h2>
      </div>
    );
  }
}

class Message extends Component{
  static contextType = ThemeContext;

  render(){
    return (
      <div>
        <p style={this.context}>{this.props.value}</p>
      </div>
    );
  }
}

export default App;
