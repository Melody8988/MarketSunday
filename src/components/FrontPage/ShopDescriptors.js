import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShopDescriptors extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className='shopInfo'>
                <div className='test'></div>
                <h1 className='shopName'>MODscintilla</h1>
                <h3 className='about'>Suas error facilis at eam, ludus delicata mea ea. Et eos omnium iuvaret equidem, epicurei praesent scripserit cu has. Commune repudiare cu eum.</h3>
                </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ShopDescriptors);