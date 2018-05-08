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
// import FrontPageStyling from './FrontPageStyling'

const styles = {
    root:{
        flexWrap: 'wrap',
        display: 'flex',
        margin: 'auto',
        width: 'auto'
       
    },
    card: {
        padding: '10px',
        margin: '30px',
        width: '300px',
        flexWrap: 'wrap',
       
    },
    media: {
        width: '500px',
    },
  };

class FrontPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getImages()
    }

    getImages = () => {
        this.props.dispatch({ type: 'GET_IMAGES' })
    }

    render() {
        //map through products recieved from imageSaga 
        //frontReducer comes from combineReducers function in index.js
        let frontPageProducts = this.props.reduxState.frontReducer.map((product) => {
           
            return (
                <div className = 'cards' key={product.id}>
                    {/* outer card includes title, image, description */}
                    <Grid style={styles.root} container spacing={24}>
                    <Card style={styles.card}>
                        {/* <CardHeader> */}
                            <p>{product.title}</p>
                        {/* </CardHeader> */}
                        <CardMedia style={styles.media}>
                            <img className="productImages" src={product.image_url} width='60%' alt=""/>
                        </CardMedia >
    
                            <p className='productDescriptions'>{product.description}</p>
                      
                        {/* inner card includes input form  */}
                        <Card>
                            <MessageInputForm
                            key={product.id}
                            product={product}
                            getImages={this.getImages}/>
                        </Card>
                    </Card>
                    </Grid>
                </div>
            )
        
        })

        return (
          
            <div>
                <div className = 'entryPanel'>
                <p className='appLogo'>MarketSunday</p>
                <p className='loginBtn'>Are you a shop owner?  <Button href="#flat-buttons"><Link to="/home">Login</Link></Button></p>
                </div>
                <ShopDescriptors/>
                <div className='products' style={styles.root}>
                {frontPageProducts}
                </div>
            </div>
           
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(FrontPage);