import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

class MessageInputForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            newMessage: {
                date: '',
                name: '',
                email: '',
                message: '',
                resolved: '', 
                galleryitems_id: this.props.product.id
            },
        }
    }

    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState({
                newMessage: {
                    ...this.state.newMessage, 
                    [propertyName] : event.target.value
                }
            })
        }
    }

    handleSendNewMessage = (propertyName, event) => {
        this.props.dispatch({
            type: 'ADD_MESSAGE', 
            payload: this.state.newMessage
        })
        this.setState({
            newMessage: {
                name: '',
                email: '',
                message: '',
            }
    })
}

    
    render(){
        return (
            <div>
            <p>Message the vendor about this product:</p>
                            <input value={this.state.newMessage.name} onChange={this.handleChangeFor('name')} placeholder="Name"></input><br/>
                            <input value={this.state.newMessage.email}  onChange={this.handleChangeFor('email')} placeholder="Email"></input><br/>
                            <input value={this.state.newMessage.message}  onChange={this.handleChangeFor('message')} placeholder="Message"></input><br/>
                            <p><Button onClick={this.handleSendNewMessage} color="secondary">Send!</Button></p>
                            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(MessageInputForm);