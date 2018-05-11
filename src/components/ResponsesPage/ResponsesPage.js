import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import ResponsesItems from './ResponsesItems'
import ShopDescriptors from '../FrontPage/ShopDescriptors';
// import vendorDirections from '../ResponsesPage/vendorDirections';

//passport.js authentication
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

import Button from 'material-ui/Button';

const styles = {
  root: {
    // margin: '40px',
    // width: '1300px',
    // justify: 'center',
    // maxWidth: '1380px'
},
}

class ResponsesPage extends Component {
  componentDidMount() {
    //grab owners specific login information
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    //grab comments made to specific owner 
    this.props.dispatch({ type: 'GET_RESPONSES' })
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
          <Button color="secondary" className='logOut' onClick={this.logout}>Log Out</Button>
          <div id="welcome" className='welcome'>Welcome, {this.props.user.userName}!<br /></div>
          <div className='welcome'>View all comments and requests</div></div>
      );
    }

    let viewerMessages = this.props.reduxState.responsesReducer.map((message) => {
      return (
        <ResponsesItems
          key={message.id}
          message={message}
        />
      )
    })

    return (
      <div>
      
        {content}
        <Nav />
        <ShopDescriptors/>
        <div style={styles.root}>
        {viewerMessages}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState, user: reduxState.user, });
export default connect(mapStateToProps)(ResponsesPage);
