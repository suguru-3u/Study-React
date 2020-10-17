import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';

class FindForm extends Component{
    input = {
        fontSize:"14pt",
        color:"#006",
        padding:"0px",
    }
    btn = {
        fontSize:"10pt",
        color:"#006",
        padding:"1px 10px",
    }

    constructor(props){
        super(props);
        this.state = {
            find:''
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e){
        this.setState({
            find: e.target.value
        });
    }

    doAction(e){
        e.preventDefault();
        let action = findMemo(this.state.find);
        this.props.dispatch(action);
    }

    render(){
        return(
            <form onSubmit={this.doAction}>
                <input style={this.input} type="text" size="10px"
                onChange={this.doChange} value={this.state.message}
                ></input>
                <input type="submit" style={this.btn} value="Find"></input>
            </form>
        );
    }
}
export default connect((state) => state)(FindForm);