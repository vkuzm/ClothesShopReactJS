import React from 'react';
import './checkoutstyles.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.reselectors';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

class Checkout extends React.Component {
  render() {
    const { cartItems, total } = this.props;

    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        <div className="total">TOTAL : ${total}</div>
        <div className="test-warning">
          * Please use the following test credit cart for payments*
          <br/>
          4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </div>
        <StripeCheckoutButton price={total}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
