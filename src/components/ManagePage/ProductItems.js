import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardMedia, CardHeader, CardText } from 'material-ui/Card'
// import { isNull } from 'util';


class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                editingTitle: false,
                editingDescription: false,
                id: this.props.product.id,
                title: this.props.product.title,
                description: this.props.product.description
            }
    }

    //on click of save button after title has been updated
    handleEditTitle = (event) => {
        console.log('you clicked edit title!');
        this.setState({
            editingTitle: !this.state.editingTitle
        });
        console.log(this.state.editingTitle)
        this.props.dispatch({
            type: 'UPDATE_TITLE',
            payload: this.state
        })
        console.log(this.state.title)
        console.log('this.state', this.state)
    }

    //on click of save button after description has been updated
    handleEditDescription = (event) => {
        console.log('you clicked edit description!');
        this.setState({
            editingDescription: !this.state.editingDescription
        });
        console.log(this.state.editingDescription)
        this.props.dispatch({
            type: 'UPDATE_TITLE',
            payload: this.state
        })
        console.log(this.state.description)
        console.log('this.state', this.state)

    }


    handleChange = propertyName => (event) => {
        console.log('in handleChange')
        this.setState({
            [propertyName]: event.target.value
        });
    }


    render() {

        //Toggle what TITLE looks like whether it is being edited or not 
        console.log(this.state)
        let title;
        if (this.state.editingTitle === true) {
            title = (
                <div>
                    <textarea defaultValue={this.props.product.title} onChange={this.handleChange('title')} ></ textarea>
                    <button onClick={this.handleEditTitle}>Save</button>
                </div>
            )
        } else if ((this.state.editingTitle === false) & this.props.product.title === null || this.props.product.title === ''){
            title = (<div onClick={this.handleEditTitle}><p>Title:</p></div>)
        } else {
            title = (<div onClick={this.handleEditTitle}><p>{this.props.product.title}</p></div>)
        }

        //Toggle what DESCRIPTION looks like whether it is being edited or not 
        let description;
        if (this.state.editingDescription === true) {
            description = (
                <div>
                    <textarea defaultValue={this.props.product.description} onChange={this.handleChange('description')}></ textarea>
                    <button onClick={this.handleEditDescription}>Save</button>
                </div>
            )
        } else if ((this.state.editingDescription === false) & this.props.product.description === null || this.props.product.description === ''){
            description = (<div onClick={this.handleEditDescription}><p>Description: </p></div>)
        } else {
            description = (<div onClick={this.handleEditDescription}><p>{this.props.product.description}</p></div>)
        }

        //display products as cards
        return (
            <div key={this.props.product.id}>
                {/* outer card includes title, image, description */}
                <Card style={{ width: '30%' }} >
                    <CardHeader>
                        {/* <p onClick={this.handleEdit}>{product.title}</p> */}
                        {title}
                    </CardHeader>
                    <CardMedia>
                        <img className="productImages" src={this.props.product.image_url} width='60%' alt="" />
                    </CardMedia>
                    <CardText>
                        {description}
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
    }
}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ProductItem);