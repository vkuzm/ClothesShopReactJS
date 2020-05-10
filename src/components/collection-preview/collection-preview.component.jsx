import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items, routeUrl }) => (
  <div className="collection-preview">
    <h1 className="title"><Link to={routeUrl}>{title.toUpperCase()}</Link></h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
