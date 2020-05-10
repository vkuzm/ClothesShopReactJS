import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((section) => {
      return (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          linkUrl={section.linkUrl}
          sectionSize={section.size}
        />
      );
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
