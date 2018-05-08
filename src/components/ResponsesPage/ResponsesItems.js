import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

//CARDS
import Card, { CardMedia, CardHeader, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
    root:{
        flexWrap: 'wrap',
        display: 'flex',
        margin: 'auto',
       
    },
    card: {
        padding: '10px',
        margin: '30px',
        width: '300px',
        flexWrap: 'wrap',
       
    },
    media: {
        width: '500px',
    }
  };

class ResponsesItems extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                id: this.props.message.id,
                resolved: this.props.message.resolved
            }
    }

    deleteMessage = () => {
        console.log('you clicked delete this message?')
        this.props.dispatch({
            type: 'DELETE_MESSAGE',
            payload: this.state
        })
    }

    updateResolveStatus = (event) => {
        this.props.dispatch({
            type: 'UPDATE_STATUS',
            payload: this.state
        })
    }//end updateResolveStatus


    render() {

    let status;
    if (this.state.resolved === true) {
        status = (
            <p>Resolved!</p>
        )
    } else if  (this.state.resolved === false){
        status = (
            <p>Not resolved</p>
        )
    }

        return (
            <div>
                <Grid style={styles.root} container spacing={24}>
                <Card style={styles.card}>
                <p>{this.props.message.title}</p>
                <p>{this.props.message.name}</p>
                <p>{this.props.message.message}</p>
                <p>{this.props.message.email}</p>
                <p><Moment format="MM/DD/YYYY">{this.props.message.date}</Moment></p>
                {status}
                <button onClick={this.updateResolveStatus}>Update</button>
                <button onClick={this.deleteMessage}>Delete Message</button>
                </Card>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ResponsesItems);