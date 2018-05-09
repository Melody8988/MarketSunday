import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

//CARDS
import Card, { CardMedia, CardHeader, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'


const styles = {
    root:{
        flexWrap: 'wrap',
        display: 'flex',
        margin: 'auto',
       
    },
    card: {
        padding: '10px',
        margin: '30px',
        width: '70%',
        flexWrap: 'wrap',
        align: 'center'
       
    },
    productTitle: {
        textTransform: 'uppercase',
        fontFamily: 'Lato, sans-serif',
       
    },
    productDate: {
        fontFamily: 'Lato, sans-serif',
        fontStyle: 'italic',
        fontSize: '15px'
       
    },
    media: {
        width: '500px',
    },
    productNew: {
        color: '#9b9b9b',
        fontStyle: 'italic',
        fontSize: '14px',
    },
    // productName: {
    //     marginBottom: '30px'
    // },
    productMessage:{
        marginTop: '30px',
        marginBottom: '30px',
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
            <p>Resolved!<CheckBox style={{ float: 'right', marginBottom: '20px' }} /></p>
        )
    } else if  (this.state.resolved === false){
        status = (
            <p>Not resolved<CheckBoxOutlineBlank style={{ float: 'right', marginBottom: '20px' }} /></p>
        )
    }

        return (
            <div>
                
                <Grid style={styles.root} container spacing={24}>
                <Card style={styles.card}>
                <div>
                <p style={styles.productTitle}>{this.props.message.title}</p>
                <div style={styles.productName}>{this.props.message.name}<p style={styles.productNew}> on <Moment format="MM/DD/YYYY">{this.props.message.date}</Moment></p></div>
                
                <p style={styles.productMessage}>{this.props.message.message}</p>
                <p style={styles.productEmail}>{this.props.message.email}</p>
                {status}
                </div>
                <button onClick={this.updateResolveStatus}>Update</button>
                <button onClick={this.deleteMessage}>Delete</button>
                </Card>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ResponsesItems);