import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollections as fetchCollectionsAction } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded, selectIsCollectionLoading } from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import './shop-styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { isCollectionLoaded, match } = this.props;

    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={match.path}
            render={(props) => (
              <CollectionsOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoading: selectIsCollectionLoading,
  isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
