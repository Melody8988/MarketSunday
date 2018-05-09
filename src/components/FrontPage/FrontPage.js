import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ShopDescriptors from './ShopDescriptors'

//CARDS
import Button from 'material-ui/Button';
import DuplicatedProducts from './DuplicatedProducts'

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
                <div className='cards' key={product.id}>
                    <DuplicatedProducts
                        key={product.id}
                        product={product}
                    />
                </div>
            )
        })

        return (

            <div>
                <div className='entryPanel'>
                    <p className='appLogo'>MarketSunday</p>
                    <p className='loginBtn'>Are you a shop owner?  <Button><Link to="/home">Login</Link></Button></p>
                </div>
                <ShopDescriptors />
                <div className='products' style={styles.root}>
                    {frontPageProducts}
                </div>
            </div>

        );
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(FrontPage);