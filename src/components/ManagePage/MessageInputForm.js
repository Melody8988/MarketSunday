import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

// EXPANSION PANEL FEATURE
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
            <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <p style={{height: '12px', display: 'block', margin: '0'}} className='messageVendor'>Message the vendor about this product</p>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{height: '150px', wrap: 'normal'}}>
                            <input style={{height: '12px'}} value={this.state.newMessage.name} onChange={this.handleChangeFor('name')} placeholder="Name"></input><br/>
                            <input style={{height: '12px'}} className= 'inputEmail' value={this.state.newMessage.email}  onChange={this.handleChangeFor('email')} placeholder="Email"></input><br/>
                            <input style={{height: '12px'}} className= 'inputMessage' value={this.state.newMessage.message}  onChange={this.handleChangeFor('message')} placeholder="Message"></input><br/>
                            <Button onClick={this.handleSendNewMessage} color="secondary">Send!</Button>
            </ExpansionPanelDetails>
            </ExpansionPanel>

                            </div>
                         
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(MessageInputForm);