import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageInputForm from './MessageInputForm'
import css from '../ManagePage/ManagePage.css'

//CARDS
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia, CardHeader, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
    root:{
        flexWrap: 'wrap',
        display: 'flex',
        
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
    handleDelete = (event) => {
        this.props.dispatch({
            type: 'DELETE_IMAGE',
            payload: this.state
        })
    }//end handleDeleteReflec 

    render() {
        //Toggle what TITLE looks like whether it is being edited or not 
        let title;
        if (this.state.editingTitle === true) {
            title = (
                <div>
                    <textarea defaultValue={this.props.product.title} onChange={this.handleChange('title')} ></ textarea>
                    <button onClick={this.handleEditTitle}>Save</button>
                </div>
            )
        } else if ((this.state.editingTitle === false) & this.props.product.title === null || this.props.product.title === '') {
            title = (<div onClick={this.handleEditTitle}><p>Title:</p></div>)
        } else {
            title = (<div onClick={this.handleEditTitle}><p>{this.props.product.title}</p></div>)
        }//end title if statements

        //Toggle what DESCRIPTION looks like whether it is being edited or not 
        let description;
        if (this.state.editingDescription === true) {
            description = (
                <div>
                    <textarea defaultValue={this.props.product.description} onChange={this.handleChange('description')}></ textarea>
                    <button onClick={this.handleEditDescription}>Save</button>
                </div>
            )
        } else if ((this.state.editingDescription === false) & this.props.product.description === null || this.props.product.description === '') {
            description = (<div onClick={this.handleEditDescription}><p>Description: </p></div>)
        } else {
            description = (<div onClick={this.handleEditDescription}><p>{this.props.product.description}</p></div>)
        }//end description if statements

        //Display products as cards
        return (
            <div style={styles.root} className = 'cards' key={this.props.product.id}>
                {/* outer card includes title, image, description */}
                <Card style={styles.card}>
                    {/* <CardHeader> */}
                        {/* <p onClick={this.handleEdit}>{product.title}</p> */}
                        {title}
                    {/* </CardHeader> */}
                    <CardMedia style={styles.media}>
                        <img className="productImages" src={this.props.product.image_url} width='60%' alt="" />
                    </CardMedia>
                    {/* <CardText> */}
                        {description}
                        <button onClick={this.handleDelete}>Delete</button>
                    {/* </CardText> */}
                    {/* inner card includes input form  */}
                    {/* <Card> */}
                        <p>Message the vendor about this product:</p>
                        <input placeholder="Name"></input><br />
                        <input placeholder="Email"></input><br />
                        <input placeholder="Message"></input><br />
                        <p><Button color="secondary">Send!</Button></p>
                    {/* </Card> */}
                </Card>
            </div>
        )
    }//end render
}//end Component

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ProductItem);