import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({

});

class FrontPage extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // this.props.dispatch(clearError());
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.user.userName) {
    //   this.props.history.push('/user');
    // }
  }

  render() {
    return (
      <div>

          <h1>Gallery</h1>
        
          <div>
           
            <Link to="/home">Login</Link>
          </div>

      </div>
    );
  }
}

export default connect(mapStateToProps)(FrontPage);