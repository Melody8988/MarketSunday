import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageInputForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            newMessage: {
                date: '',
                name: '',
                email: '',
                message: '',
                resolved: ''
            }
        }
    }

    handleChangeFor = () => {
        console.log('in handleChange!')
    }

    
    render(){
        return (
            <div>
            <p>Message the vendor about this product:</p>
                            <input onChange={this.handleChangeFor('name')} placeholder="Name"></input><br/>
                            <input onChange={this.handleChangeFor('email')} placeholder="Email"></input><br/>
                            <input onChange={this.handleChangeFor('message')} placeholder="Message"></input><br/>
                            <button>Send!</button>
                            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(MessageInputForm);