import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.reselectors';
import Loader from 'react-loader-spinner';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

class Header extends React.Component {
  render() {
    const { currentUser, cartDropdownHidden } = this.props;

    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="username">
          {currentUser ? (
            <span>{`Hi, ${currentUser.logged ? currentUser.name : 'guest'}!`}</span>
          ) : (
            <Loader
              style={{ marginTop: '8px' }}
              type="ThreeDots"
              color="#666666"
              height={20}
              width={30}
            />
          )}
        </div>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          {currentUser && currentUser.logged ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartDropdownHidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdownHidden: selectCartHidden
});

/* THE SAME
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  cartDropdownHidden: selectCartHidden(state)
});
 */

export default connect(mapStateToProps)(Header);
