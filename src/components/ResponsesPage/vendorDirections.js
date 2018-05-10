// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Nav from '../../components/Nav/Nav';
// import Grid from 'material-ui/Grid';
// import Button from 'material-ui/Button';
// //passport.js authentication
// import { USER_ACTIONS } from '../../redux/actions/userActions';
// import { triggerLogout } from '../../redux/actions/loginActions';

// class vendorDirections extends Component{
//     constructor(props){
//     super(props);
//     }

//     logout = () => {
//         this.props.dispatch(triggerLogout());
//         // this.props.history.push('home');
//       }

//     componentDidMount() {
//         //grab owners specific login information
//         this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
//         //grab comments made to specific owner 
//         this.props.dispatch({ type: 'GET_RESPONSES' })
//       }

//       componentDidUpdate() {
//         if (!this.props.user.isLoading && this.props.user.userName === null) {
//           this.props.history.push('frontPage');
//         }
//       }

//     render(){
//         let content = null;
//     if (this.props.user.userName) {
//       content = (
//         <div>
//           <Button color="secondary" className='logOut' onClick={this.logout}>Log Out</Button>
//           <h3 id="welcome" className='welcome'>Welcome, {this.props.user.userName}!<br /></h3>
//           <h5 className='manage'>Manage your products here</h5></div>
//       );
//     }

//         return(
//             <div>
//             {content}
//             </div>
//         )
//     }

// }

// const mapStateToProps = reduxState => ({ reduxState, });
// export default connect(mapStateToProps)(vendorDirections);