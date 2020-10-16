import React,{Component} from 'react';
import { connect } from 'react-redux';
import './App.css';

// Appコンポーネント
class App extends Component{

  td = {
    width:"250px"
  }

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table>
          <tbody>
            <tr>
              <td style={this.td}><FindForm /></td>  
              <td style={this.td}><DelForm /></td>  
            </tr>
          </tbody>
        </table>
        <Message />
        <Button />
      </div>
    );
  }
}

App = connect()(App);


export default App;
