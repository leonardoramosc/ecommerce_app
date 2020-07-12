import React from 'react';

import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component.jsx';

const PreviewCollection = ({title, items}) => (
  <div className="preview-collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">

      {
        items
        .filter((item, index) => index < 4)
        .map(({id, ...itemProps}) => (
          <CollectionItem key={id} {...itemProps} /> 
        ))
      }

    </div>
  </div>
)

export default PreviewCollection;