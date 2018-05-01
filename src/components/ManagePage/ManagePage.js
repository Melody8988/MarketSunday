import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardMedia, CardHeader, CardText } from 'material-ui/Card'
import Nav from '../../components/Nav/Nav';

//passport.js authentication
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

class ManagePage extends Component {
  constructor(props) {
    super(props)
    this.state = { editingTitle: false }
  }
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

  handleEdit = () => {
    console.log('you clicked edit title!');
    this.setState({
      editingTitle: !this.state.editingTitle
    });
    console.log(this.state.editingTitle)
  }

  handleSave = () => {
    console.log('you clicked save!')
  }

  handleTitleChange = (event) => {
    console.log(event.target.value)
    this.props.dispatch({
      type: 'UPDATE_TITLE',
      payload: event.target.value
    })
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {

    //Map through all products 
    let frontPageProducts = this.props.reduxState.frontReducer.map((product) => {

      //Toggle what title looks like whether it is being edited or not 
      let title;
      if (this.state.editingTitle === true) {
        title = (
          <div>
            <textarea defaultValue={product.title} onChange={this.handleTitleChange}></ textarea>
            <button onClick={this.handleEdit}>Save</button>
          </div>
        )
      } else {
        title = (<p onClick={this.handleEdit}>{product.title}</p>)
      }

      //display products as cards
      return (
        <div key={product.id}>
          {/* outer card includes title, image, description */}
          <Card style={{ width: '30%' }} >
            <CardHeader>
              {/* <p onClick={this.handleEdit}>{product.title}</p> */}
              {title}
            </CardHeader>
            <CardMedia>
              <img className="productImages" src={product.image_url} width='60%' alt="" />
            </CardMedia>
            <CardText>
              <p>{product.description}</p>
            </CardText>
            {/* inner card includes input form  */}
            <Card>
              <p>Message the vendor about this product:</p>
              <input placeholder="Name"></input><br />
              <input placeholder="Email"></input><br />
              <input placeholder="Message"></input><br />
              <button>Send!</button>
            </Card>
          </Card>
        </div>
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
          <Nav />
          {content}
        </div>
        <h1>Shop name</h1>
        <h2>Shop info</h2>
        <h3>Shop contact</h3>
        {frontPageProducts}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ reduxState, user: reduxState.user, });
export default connect(mapStateToProps)(ManagePage);

