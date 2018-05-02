import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Card, CardMedia, CardHeader, CardText } from 'material-ui/Card'


class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state = { editingTitle: false }
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

  render() {

   //Toggle what title looks like whether it is being edited or not 
   let title;
   if (this.state.editingTitle === true) {
     title = (
       <div>
         <textarea defaultValue={this.props.product.title} onChange={this.handleTitleChange}></ textarea>
         <button onClick={this.handleEdit}>Save</button>
       </div>
     )
   } else {
     title = (<p onClick={this.handleEdit}>{this.props.product.title}</p>)
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
           <p>{this.props.product.description}</p>
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