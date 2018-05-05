import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';


class ResponsesPage extends Component {
  componentDidMount() {
    //grab owners specific login information
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    //grab comments made to specific owner 
    this.props.dispatch({ type: 'GET_RESPONSES' })
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('frontPage');
    }
  }

 

  render() {
    let content = null;

    let viewerMessages = this.props.reduxState.responsesReducer.map((message) => {
      return ( <div key={message.id}>
        <p>{message.title}</p>
        <p>{message.name}</p>
        <p>{message.message}</p>
        <p>{message.email}</p>
        <p>{message.date}</p>
        <button onClick={this.deleteMessage}>Delete Message</button>
      
      </div>
      )
    })

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            Viewer Comments:
          </p>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
        { viewerMessages }
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState, user: reduxState.user, });
export default connect(mapStateToProps)(ResponsesPage);
