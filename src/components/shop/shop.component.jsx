import React from 'react';

import SHOP_DATA from './shop.data.js';

import PreviewCollection from '../preview-collection/preview-collection.component.jsx';

class ShopPage extends React.Component {
  constructor(){
    super();

    this.state = {
      collections : SHOP_DATA
    }
  }

  render(){
    // crear componente principal shop
    return (
      <div className="shop-page">
        {
          this.state.collections.map(({id, ...otherProps}) => (
            <PreviewCollection key={id} {...otherProps}  />
          ))
        }
      </div>
    )

      // Hacer una funcion que agregue todos los productos con su respectivo componente siendo alimentados con la data

  }
}

export default ShopPage;