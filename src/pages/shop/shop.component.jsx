import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollections as fetchCollectionsAction } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import './shop-styles.scss';

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Switch>
          <Route exact path={match.path} component={CollectionsOverviewContainer} />
          <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsAction())
});

export default connect(null, mapDispatchToProps)(Shop);
