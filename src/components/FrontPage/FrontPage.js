import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios'
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

  getImages = () =>{
    this.props.dispatch({ type: 'GET_IMAGES' })
}

  render() {
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