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
    title: {
        align: 'center',
    },
    media: {
        width: '500px',
    },
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
        // swal('Are you sure you want to delete this product from the gallery?')
        this.props.dispatch({
            type: 'DELETE_IMAGE',
            payload: this.state
        })
    }//end handleDeleteImage

    render() {
        //Toggle what TITLE looks like whether it is being edited or not 
        let title;
        if (this.state.editingTitle === true) {
            title = (
                <div>
                    <textarea style={{fontSize: '15px', borderRadius: '3px'}} rows="1" cols="35" defaultValue={this.props.product.title} onChange={this.handleChange('title')} ></ textarea>
                    <Button style={{marginTop: '10px'}} href="#flat-buttons" color="secondary" onClick={this.handleEditTitle}>Save</Button>
                </div>
            )
        } else if ((this.state.editingTitle === false) & this.props.product.title === null || this.props.product.title === '') {
            title = (<div onClick={this.handleEditTitle}><p style={{color: '#b2b2b2', fontStyle: 'italic' }}>Type new title here <Edit style={{float: 'right', color: '#b2b2b2'}}/></p></div>)
        } else {
            title = (<div onClick={this.handleEditTitle}><p>{this.props.product.title}<Edit style={{float: 'right'}}/></p></div>)
        }//end title if statements

        //Toggle what DESCRIPTION looks like whether it is being edited or not 
        let description;
        if (this.state.editingDescription === true) {
            description = (
                <div>
                    <textarea style={{fontSize: '15px', borderRadius: '3px'}} rows="4" cols="35" defaultValue={this.props.product.description} onChange={this.handleChange('description')}></ textarea>
                    <Button style={{marginTop: '10px'}} href="#flat-buttons" color="secondary" onClick={this.handleEditDescription}>Save</Button>
                </div>
            )
        } else if ((this.state.editingDescription === false) & this.props.product.description === null || this.props.product.description === '') {
            description = (<div onClick={this.handleEditDescription}><p style={{color: '#b2b2b2', fontStyle: 'italic' }}>Type new description here <Edit style={{float: 'right', color: '#b2b2b2'}}/></p></div>)
        } else {
            description = (<div onClick={this.handleEditDescription}><p>{this.props.product.description} <Edit style={{float: 'right'}}/></p></div>)
        }//end description if statements

        //Display products as cards
        return (
            <div className='cards' key={this.props.product.id}>
                <Grid style={styles.root} container spacing={24}>
                    <Card style={styles.card}>
                        <Typography align="center"><p className='titleFont'>{title}</p></Typography>
                        <CardMedia style={styles.media}>
                            <img className="productImages" src={this.props.product.image_url} width='60%' alt="" />
                        </CardMedia >
                        <p className='productDescriptions'>{description}</p>
                        <Button href="#flat-buttons" color="secondary" onClick={this.handleDeleteImage}>Delete</Button>
                    </Card>
                </Grid>
            </div>
        )
    }//end render
}//end Component

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ProductItem);