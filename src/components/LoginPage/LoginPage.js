import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import Button from 'material-ui/Button';


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/manage');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          { this.props.login.message }
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <body className='loginPhoto'>
        { this.renderAlert() }
        <div className='imageDiv'>
        <form >
          <h1 className='loginPrompt'>Login</h1>
          <div>
            <label htmlFor="username">
              <input
                placeholder='Username'
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              /><br/>
              <Button onClick={this.login}color="secondary">Log In</Button>
            </label>
          </div>
          <div>
            {/* <Link to="/register">Register</Link> */}
          </div>
        </form>
        </div>
      </body>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
