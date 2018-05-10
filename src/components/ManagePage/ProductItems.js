import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

//CARDS
import Card, { CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Edit from '@material-ui/icons/Edit';

const styles = {
    root: {
        flexWrap: 'wrap',
        display: 'flex',
        margin: 'auto',
        width: 'auto',
        justify: 'center',
        maxWidth: '1140px'
    },
    card: {
        padding: '15px',
        margin: '20px',
        width: '300px',
        flexWrap: 'wrap',
    },
    titleDescriptionNull: {
        align: 'center',
        fontFamily: 'New Century Schoolbook, serif',
        fontSize: '20px',
        color: '#b2b2b2',
        fontStyle: 'italic',
        margin: '20px'
    },
    title: {
        fontFamily: 'New Century Schoolbook, serif',
        fontSize: '20px',
        margin: '20px'
    },
    description: {
        margin: '20px',

    },
    media: {
        width: '500px',
    },

    titleSave: {
        marginBottom: '10px',
        marginTop: '10px',
    }
};

class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                editingTitle: false,
                editingDescription: false,
                id: this.props.product.id,
                title: this.props.product.title,
                description: this.props.product.description
            }
    }

    //After title has been updated, set new title
    handleEditTitle = (event) => {
        this.setState({
            editingTitle: !this.state.editingTitle
        });
        this.props.dispatch({
            type: 'UPDATE_TITLE',
            payload: this.state
        })
    }//end handleEditTitle

    //After description has been updated, set new description
    handleEditDescription = (event) => {
        this.setState({
            editingDescription: !this.state.editingDescription
        });
        this.props.dispatch({
            type: 'UPDATE_TITLE',
            payload: this.state
        })
    }//end handleEditDescription

    //Set user's input value as the new product property
    handleChange = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value
        });
    }//end handleChange

    //Delete send product item request
    handleDeleteImage = (event) => {
        swal({
            text: "Are you sure you want to delete this item from the gallery?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.props.dispatch({
                    type: 'DELETE_IMAGE',
                    payload: this.state
                })
              swal("Item successfully deleted", {
                icon: "success",
              });
            } else {
                console.log('message kept')
            }
          });
        
    }//end handleDeleteImage


    render() {
        //Toggle what TITLE looks like whether it is being edited or not 
        let title;
        if (this.state.editingTitle === true) {
            title = (
                <div>
                    <textarea style={{ fontSize: '15px', borderRadius: '3px' }} rows="1" cols="35" defaultValue={this.props.product.title} onChange={this.handleChange('title')} ></ textarea>
                    <Button color="secondary" style={styles.titleSave} onClick={this.handleEditTitle}>Save</Button>
                </div>
            )
        } else {
            title = (<Typography onClick={this.handleEditTitle} style={styles.title}>{this.props.product.title}<Edit style={{ float: 'right', marginBottom: '20px' }} /></Typography>)
        }//end title if statements

        //Toggle what DESCRIPTION looks like whether it is being edited or not 
        let description;
        if (this.state.editingDescription === true) {
            description = (
                <div>
                    <textarea style={{ fontSize: '15px', borderRadius: '3px' }} rows="2" cols="35" defaultValue={this.props.product.description} onChange={this.handleChange('description')}></ textarea>
                    <Button color="secondary" onClick={this.handleEditDescription}>Save</Button>
                </div>
            )
        } else {
            description = (<Typography onClick={this.handleEditDescription} style={styles.description}>{this.props.product.description} <Edit style={{ float: 'right' }} /></Typography>)
        }//end description if statements

        //Display products as cards
        return (
            <div className='cards' key={this.props.product.id}>
                <Grid style={styles.root} container spacing={24}>
                    <Card style={styles.card}>
                        <div align="center" className='titleFont'>{title}</div>
                        <CardMedia style={styles.media}>
                            <img className="productImages" src={this.props.product.image_url} width='60%' alt="" />
                        </CardMedia >
                        <div className='productDescriptions'>{description}</div>
                        <Button color="secondary" onClick={this.handleDeleteImage}>Delete</Button>
                    </Card>
                </Grid>
            </div>
        )
    }//end render
}//end Component

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ProductItem);