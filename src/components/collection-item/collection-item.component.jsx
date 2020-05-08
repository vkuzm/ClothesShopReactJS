import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem as addToCartAction } from '../../redux/cart/cart.actions';
import './collection-item.style.scss';

const CollectionItem = ({ item, addToCart }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${item.imageUrl}` }} />
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>
    <CustomButton inverted onClick={() => addToCart(item)}>
      Add to cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCartAction(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
