import React from 'react';
import { connect } from 'react-redux';
import { searchCollection as searchCollectionAction } from '../../redux/shop/shop.actions';
import './search-input.styles.scss';

const SearchInput = ({ onSearchChange }) => (
  <div className="search-field">
    <span className="search-icon">	&#x2315;</span>
    <input
      type="text"
      name="search"
      placeholder="Start typing for searching..."
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (text) => dispatch(searchCollectionAction(text))
});

export default connect(null, mapDispatchToProps)(SearchInput);
