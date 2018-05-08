import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import ProductItems from './ProductItems'
import ReactFilestack, { client } from 'filestack-react';
import filestack from 'filestack-js';
import Grid from 'material-ui/Grid';
import css from '../ManagePage/ManagePage.css'
import Button from 'material-ui/Button';
import ShopDescriptors from '../FrontPage/ShopDescriptors'
import Maincss from '../../styles/main.css'
//passport.js authentication
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

const styles = {
  root:{
      flexWrap: 'wrap',
      display: 'flex', 
  },
};

class ManagePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newImage: {
        title: '', 
        image_url: '',
        description: '',  
      }
    }
  }
  componentDidMount() {
    //grab specific user's information
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    //get specfic user's existing products
    this.props.dispatch({ type: 'GET_IMAGES' })
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('frontPage');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  //on filestack success
  handleUpload = (result) => {
    this.setState({
      newImage: {
            title: this.state.newImage.description,
            description: this.state.newImage.description,
            image_url: result.filesUploaded[0].url
        }
    })
    this.props.dispatch({
      type: 'ADD_IMAGE',
      payload: this.state.newImage
    })
}

  render() {
    //COPIED FROM FILESTACK API DOCUMENTATION TO UPLOAD IMAGE
    const client = filestack.init('AoFC5ga9oR5w2BF450Phlz', [options]);
    const apiKey = 'AoFC5ga9oR5w2BF450Phlz';
    const options = {
      accept: 'image/*',
      maxFiles: 1,
      storeTo: {
        location: 's3'
      }//end storeTo
    }//end options

    //Map through all products 
    let frontPageProducts = this.props.reduxState.frontReducer.map((product) => {
      return (
        <ProductItems
          key={product.id}
          product={product}
        />
      )
    })

    //if the user is logged in, show a greeting and give log out option
    let content = null;
    if (this.props.user.userName) {
      content = (
        <div>
          <h3
            id="welcome"
          className='welcome'>
            Welcome, {this.props.user.userName}!<br />
          </h3>
          <h5
          className='manage'>
            Manage your products here</h5>
        </div>
      );
    }


    return (
      
      <div>
        <div>
      
        <Button href="#flat-buttons" color="secondary" className='logOut' onClick={this.logout}>Log Out</Button>
          {content}
          <Nav />
          
        </div>
        <ShopDescriptors/>
        <ReactFilestack
          apikey={apiKey}
          buttonText="Add new Product"
          options={options}
          onSuccess={this.handleUpload}
        />
        <div className='products' style={styles.root}>
        {frontPageProducts}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState, user: reduxState.user, });
export default connect(mapStateToProps)(ManagePage);

