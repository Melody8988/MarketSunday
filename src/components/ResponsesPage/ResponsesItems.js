import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResponsesItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.message.id,
            resolved: this.props.message.resolved,
            galleryitems_id: this.props.message.galleryitems_id
        }
    }

    deleteMessage = () => {
        console.log('you clicked delete this message?')
        this.props.dispatch({
            type: 'DELETE_MESSAGE',
            payload: this.state
        })
    }

    // updateResolveStatus = (event) => {
    //     this.setState({
    //         resolved: !this.props.message.resolved
    //     })
    //     this.props.dispatch({
    //         type: 'UPDATE_RESOLVED',
    //         payload: this.state
    //     })
    // }


    render() {

    // let status;
    // if (this.state.resolved === true) {
    //     status = (
    //         <p>Resolved?: <button onClick={this.updateResolveStatus}>Yes</button></p>
    //     )
    // } else if  (this.state.resolved === false){
    //     status = (
    //         <p>Resolved?: <button onClick={this.updateResolveStatus}>No</button></p>
    //     )
    // }

        return (
            <div>
                <p>{this.props.message.title}</p>
                <p>normal{this.props.message.id}</p>
                <p>product id{this.props.message.galleryitems_id}</p>
                <p>{this.props.message.name}</p>
                <p>{this.props.message.message}</p>
                <p>{this.props.message.email}</p>
                <p>{this.props.message.date}</p>
                {/* {status} */}
                <button onClick={this.deleteMessage}>Delete Message</button>
            </div>
        )
    }

}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ResponsesItems);