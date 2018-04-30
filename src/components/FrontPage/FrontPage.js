import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'
// import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
    getImages: state.getImages
});

class FrontPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getImages()
    }


    // getImages = () => {
    //     axios.get('/api/shop').then((response) => {
    //         this.props.dispatch({
    //             type: 'GET_IMAGES',
    //             payload: response.data
    //         })
    //     }).catch((error) => {
    //         console.log('Error in get', error);
    //     })
    // }

    getImages = () =>{
        this.props.dispatch({ type: 'GET_IMAGES' })
    }

    render() {
        //map through products recieved from imageSaga 
        let frontPageProducts = this.props.reduxState.getImagesReducer.map((product)=>{
            return (
                <div key={product.id}>
                <p></p>
                </div>
            )
        })
        return (
            <div>

                <h1>Shop name</h1>
                <h2>Shop info</h2>
                <h3>Shop contact</h3>
                <div>
                    <Link to="/home">Login</Link>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(FrontPage);