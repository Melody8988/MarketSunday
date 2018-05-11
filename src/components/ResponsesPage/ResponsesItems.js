import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import swal from 'sweetalert';

//CARDS
import Card, { CardMedia, CardHeader, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'



const styles = {

    root: {
        
        marginLeft: '300px',
        marginRight: '350px',
        width: '1000px',
        justify: 'center',
        
    },

    card: {
        padding: '10px',
        margin: '30px',
        width: '60%',
        // flexWrap: 'wrap',
        justify: 'center'
       
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
    productMessage:{
        marginTop: '30px',
        marginBottom: '30px',
    },
    resolveStatus: {
        float: 'right',
        margin: '10px'
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

        swal({
            text: "Are you sure you want to delete this message?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.props.dispatch({
                    type: 'DELETE_MESSAGE',
                    payload: this.state
                })
              swal("Message successfully deleted", {
                icon: "success",
              });
            } else {
                console.log('message kept')
            }
          });
    
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
            <p style={styles.resolveStatus}>Resolved!<CheckBox onClick={this.updateResolveStatus} style={{ float: 'right', marginBottom: '20px' }} /></p>
        )
    } else if  (this.state.resolved === false){
        status = (
            <p style={styles.resolveStatus}>Not resolved<CheckBoxOutlineBlank onClick={this.updateResolveStatus} style={{ float: 'right', marginBottom: '20px' }} /></p>
        )
    }

        return (
            <div>
                <Grid style={styles.root} container spacing={24}>
                <Card style={styles.card}>
                <div>
                {status}
                <p style={styles.productTitle}>{this.props.message.title}</p>
                <div style={styles.productName}>{this.props.message.name}<p style={styles.productNew}> on <Moment format="MM/DD/YYYY">{this.props.message.date}</Moment></p></div>
                <p style={styles.productMessage}>''{this.props.message.message}''</p>
                <p style={styles.productEmail}>{this.props.message.email}</p>
                </div>
                <Button color="secondary" onClick={this.deleteMessage}>Delete</Button>
                </Card>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ResponsesItems);