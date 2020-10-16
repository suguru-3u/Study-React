import React,{Component} from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component{

  input = '';

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }

  // inputStyle = {
  //   fontSize:"12pt",
  //   padding:"5px"
  // }

  constructor(props){
      super(props);
      this.state = {
        message:'type your name',
      };
      this.doCheck = this.doCheck.bind(this);
      // this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event){
    this.input = event.target.value;
  }

  doSubmit(event){
    this.setState({
      message: 'Hello ' + this.input + '!'
    });
    event.preventDefault();
  }

  doCheck(event){
    alert(event.target.value + "は長すぎます。（最大10文字）");
  }

  render(){
    return<div>
        <h1>React</h1>
        <h2>{this.state.message}</h2>
        <Message maxLength="10" onCheck={this.doCheck} />
        {/* <form onSubmit={this.doSubmit}>
          <label>
            <span style={this.inputStyle}></span>Message;
            <input type="text" style={this.inputStyle} onChange={this.doChange} 
            required pattern="[A-Za-z_,.]+"/>
          </label>
          <input type="submit" style={this.inputStyle} value="Click"></input>
        </form> */}
      </div>;
  }
}

class Message extends Component{
  liputStyle = {
    fontSize:"12pt",
    padding:"5px"
  }

  constructor(props){
    super(props);
    this.doChange = this.doChange.bind(this);
  }

  doChange(e){
    if(e.target.value.length > this.props.maxLength){
      this.props.onCheck(e);
      e.target.value = e.target.value.substr(0,this.props.maxLength);
    }
  }

  render(){
    // let content = this.props.children;
    // let arr = content.split('。');
    // let arr2 = [];
    // for(let i = 0; i < arr.length; i++){
    //   if(arr[i].trim() != ''){
    //     arr2.push(arr[i]);
    //   }
    // }
    // let list = arr2.map((value,key) => (
    // <li style={this.li} key={key}>{value}.</li> )
    // );
    return <input type="text" style={this.liputStyle} 
    onChange={this.doChange}/>
  }
}

export default App;
