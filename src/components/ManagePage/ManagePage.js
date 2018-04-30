import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardMedia, CardHeader, CardText } from 'material-ui/Card'
import Nav from '../../components/Nav/Nav';

//passport.js authentication
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

class ManagePage extends Component {
  componentDidMount() {
    //grab specific user's information
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    //get specfic user's existing products
    this.getImages();
  }

  getImages = () => {
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

  render() {
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
        <Nav />
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({user: state.user,});
export default connect(mapStateToProps)(ManagePage);

