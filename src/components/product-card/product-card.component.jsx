import Button  from "../button/button.component";
import './product-card.styles.scss'
import { useContext } from 'react';

import { CartContext } from '../../components/context/cart.context';

const ProductCard = ({ products }) => {

  const { name, price, imageUrl } = products;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(products);


  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted"  onClick={addProductToCart}>Add to card</Button>
    </div>
  );
};

export default ProductCard