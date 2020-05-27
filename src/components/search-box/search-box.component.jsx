import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForSearch } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item.component';
import './search-box.styles.scss';

const SearchBox = ({ items, searchText }) => {
  const searchItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="search-box collection-page">
      <h1 className="search-title">SEARCH</h1>
      {searchItems.length ? (
        <div className="items">
          {searchItems.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="search-not-found">Not items found</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: selectCollectionsForSearch(state)
});

export default connect(mapStateToProps)(SearchBox);
