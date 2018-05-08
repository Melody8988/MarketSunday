import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import css from '../../styles/main.css'
import MessageInputForm from '../ManagePage/MessageInputForm'
import headPhoto from '../../styles/pexels-photo-382420.jpeg'
import ShopDescriptors from './ShopDescriptors'

//CARDS
import Card, { CardMedia, CardHeader, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

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

class DuplicatedProducts extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        return(
            <div>
            {/* outer card includes title, image, description */}
            <Grid style={styles.root} container spacing={20}>
            <Card style={styles.card}>
                <Typography align="center"><p className='titleFont'>{this.props.product.title}</p></Typography>
                <CardMedia style={styles.media}>
                    <img className="productImages" src={this.props.product.image_url} width='60%' alt="" />
                </CardMedia >
                <p className='productDescriptions'>{this.props.product.description}</p>
                {/* inner card includes input form  */}
                <MessageInputForm
                    key={this.props.product.id}
                    product={this.props.product}
                    getImages={this.getImages} />
            </Card>
        </Grid>
        </div>
        )
    }

}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(DuplicatedProducts);