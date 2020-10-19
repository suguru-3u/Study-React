import React,{Component} from 'react';
import './App.css';
import SampleData from './fire/SampleData';
import firebase from "firebase";

// Firebaseの設定
var config = {
  apiKey: "AIzaSyBt2IUddxajbUSiyAiDAnb6nGRvlWDKHTg",
  authDomain: "suguru-react.firebaseapp.com",
  databaseURL: "https://suguru-react.firebaseio.com",
  projectId: "suguru-react",
  storageBucket: "suguru-react.appspot.com",
  messagingSenderId: "918555887263",
  appId: "1:918555887263:web:77fabba2e905c33ded44aa",
  measurementId: "G-F64L6V64LJ"
}

// Firebaseの初期化
firebase.initializeApp(config);

// Appコンポーネント
class App extends Component{

  render(){
    return(
      <div>
        <h1>Fire</h1>
        <h2>sampledata</h2>
        <SampleData />
      </div>
    );
  }
}

export default App;