import { useContext } from "react";
import { ProductsContext } from "../../components/context/product.context.component";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss'
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return (<ProductCard key={product.id} products={product} />);
      })}
    </div>
  );
};

export default Shop;
