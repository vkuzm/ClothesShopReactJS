import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, sectionSize, linkUrl, history, match }) => (
  <div className={`${sectionSize} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image"
      style={{backgroundImage: `url(${imageUrl})`,}}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
