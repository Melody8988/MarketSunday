import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Card, CardMedia, CardHeader, CardText } from 'material-ui/Card'
import Nav from '../../components/Nav/Nav';
import ProductItems from './ProductItems'
import ReactFilestack, { client } from 'filestack-react';
import filestack from 'filestack-js';


//passport.js authentication
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

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
          getImages={this.getImages}
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
          >
            Welcome, {this.props.user.userName}! <br />
            Manage Products Here
          </h3>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }


    return (
      
      <div>
        <div>
          {content}
          <Nav />
        </div>
        <h1>Shop name</h1>
        <h2>Shop info</h2>
        <h3>Shop contact</h3>
        {/* <button onClick={this.addImage}>ADD</button> */}
        <ReactFilestack
          apikey={apiKey}
          buttonText="Add new Product"
          options={options}
          onSuccess={this.handleUpload}
        />
        {frontPageProducts}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState, user: reduxState.user, });
export default connect(mapStateToProps)(ManagePage);

