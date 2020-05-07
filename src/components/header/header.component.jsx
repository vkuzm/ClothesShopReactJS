import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import Loader from 'react-loader-spinner';
import './header.styles.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ReactComponent as Logo } from '../../assets/crown.svg';

class Header extends React.Component {
  render() {
    const user = this.props.currentUser;

    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="username">
          {this.props.currentUser == null ? (
            <Loader
              style={{ marginTop: '8px' }}
              type="ThreeDots"
              color="#666666"
              height={20}
              width={30}
            />
          ) : (
            <span>{`Hi, ${user.logged ? user.name : 'guest'}!`}</span>
          )}
        </div>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          {this.props.currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
