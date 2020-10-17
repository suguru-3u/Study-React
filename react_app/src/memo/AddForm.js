import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

class AddForm extends Component{
    input = {
        fontSize:"16pt",
        color:"#006",
        padding:"1px",
        margin:"5xp 0px"
    }
    btn = {
        fontSize:"14pt",
        color:"#006",
        padding:"2px 10px",
    }
    message = {
        fontSize:"16pt",
        color:"#006",
        margin:"5xp 10px"
    }

    constructor(props){
        super(props);
        this.state = {
            message:''
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e){
        this.setState({
            message: e.target.value
        });
    }

    doAction(e){
        e.preventDefault();
        let action = addMemo(this.state.message);
        this.props.dispatch(action);
        this.setState({
            message:''
        });
    }

    render(){
        return(
            <div>
                <p style={this.message}>{this.props.message}</p>
                <form onSubmit={this.doAction}>
                    <input style={this.input} type="text" size="40px"
                    onChange={this.doChange} value={this.state.message}
                    required></input>
                    <input type="submit" style={this.btn} value="Add"></input>
                </form>
            </div>
        );
    }
}
export default connect((state) => state)(AddForm);