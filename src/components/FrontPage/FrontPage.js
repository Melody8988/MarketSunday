import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardMedia, CardHeader, CardText } from 'material-ui/Card'
import MessageInputForm from '../ManagePage/MessageInputForm'

// GRIDS
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Grid from 'material-ui/Grid';
// // import { FormLabel, FormControlLabel } from 'material-ui/Form';
// import Radio, { RadioGroup } from 'material-ui/Radio';
// import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });


class FrontPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getImages()
    }

    getImages = () => {
        this.props.dispatch({ type: 'GET_IMAGES' })
    }

    render() {
        //map through products recieved from imageSaga 
        //frontReducer comes from combineReducers function in index.js
        let frontPageProducts = this.props.reduxState.frontReducer.map((product) => {
            return (
                <div key={product.id}>
                    {/* outer card includes title, image, description */}
                    <Card style={{ width: '30%' }} >
                        <CardHeader>
                            <p>{product.title}</p>
                        </CardHeader>
                        <CardMedia>
                            <img className="productImages" src={product.image_url} width='60%' alt=""/>
                        </CardMedia>
                        <CardText>
                            <p>{product.description}</p>
                        </CardText>
                        {/* inner card includes input form  */}
                        <Card>
                            <MessageInputForm
                            key={product.id}
                            product={product}
                            getImages={this.getImages}/>
                        </Card>
                    </Card>
                </div>
            )
        })

        return (
            <div>
                <h1>Shop name</h1>
                <h2>Shop info</h2>
                <h3>Shop contact</h3>
                {frontPageProducts}
                <div>
                    <Link to="/home">Login</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(FrontPage);