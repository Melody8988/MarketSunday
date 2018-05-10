import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageInputForm from '../ManagePage/MessageInputForm'

//CARDS
import Card, { CardMedia } from 'material-ui/Card';
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
        fontFamily: 'New Century Schoolbook, serif',
        fontSize: '20px',
        margin: '20px'
    },
    description: {
        margin: '20px'
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
            <Grid style={styles.root} container spacing={24}>
            <Card style={styles.card}>
                <Typography align="center"style={styles.title}>{this.props.product.title}</Typography>
                <CardMedia style={styles.media}>
                    <img className="productImages" src={this.props.product.image_url} width='60%' alt="" />
                </CardMedia >
                <Typography style={styles.description}>{this.props.product.description}</Typography>
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