import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardActions, CardMedia, CardHeader, CardText } from 'material-ui/Card'

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
                            <img className="productImages" src={product.image_url} width='60%' />
                        </CardMedia>
                        <CardText>
                            <p>{product.description}</p>
                        </CardText>
                        <Card>
                            <p>Message the vendor:</p>
                            <input placeholder="Name"></input><br/>
                            <input placeholder="Email"></input><br/>
                            <input placeholder="Message"></input><br/>
                            <button>Send!</button>
                        </Card>
                    </Card>
                    {/* inner card includes input form  */}
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