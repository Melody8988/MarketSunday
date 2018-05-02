import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'


class ProductItem extends Component {

}

const mapStateToProps = reduxState => ({ reduxState, });
export default connect(mapStateToProps)(ProductItem);