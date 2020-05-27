import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview, selectSearchText } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.styles.scss';
import SearchBox from '../search-box/search-box.component';
import { createStructuredSelector } from 'reselect';
import SearchInput from '../search-input/search-input.component';

const CollectionsOverview = ({ collections, match, searchText }) => (
  <div className="collections-overview-box">
    <SearchInput />
    {searchText.length ? (
      <SearchBox searchText={searchText} />
    ) : (
      <div className="collections-overview">
        {collections.map((collection) => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            routeUrl={`${match.path}/${collection.routeName}`}
            items={collection.items}
          />
        ))}
      </div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  searchText: selectSearchText
});

export default connect(mapStateToProps)(CollectionsOverview);
