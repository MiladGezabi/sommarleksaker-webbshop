import { useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { CartItems, Products, loginState } from "../Atoms";
import { NavLink } from "react-router-dom";
import { handleAddProduct } from "../../utils/handleProduct";
import onDeleteProduct from "../../utils/deleteProduct";

const ProductsPage = () => {
  const [products, setProducts] = useRecoilState(Products);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useRecoilState(CartItems)
  
  

  

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [products, query]);

  
  

  

  

  return (
    <>
      <section className="search-and-filter">
        <form className="search-form" placeholder="Sök" action="">
          <input
            type="search"
            value={query}
            placeholder="Sök"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>

      
      </section>

      <section className="products-card-box">
        <ul>
          {products ?
            filteredProducts.map((product) => (
              <li key={product.id} className="product-card">
                <NavLink to={`/product/${product.id}`}
                 className="navlink">
                  <div className="image-box">
                    <img src={product.picture} alt={product.name} />
                  </div>
                  <div className="name-and-price-box">
                    <h3>{product.name}</h3>
                    <p>{product.price} KR</p>
                  </div>
                </NavLink>
                <button
                  className="buybtn"
                  onClick={() => handleAddProduct(product, cartItems, setCartItems)}
                >
                  Köp
                </button>
                {isLoggedIn === true && <button className="deletebtn"
                onClick={() =>onDeleteProduct(product)}>Ta bort</button>}
              </li>
            )): <h2>Laddar producter.......</h2>}
        </ul>
      </section>
    </>
  );
};

export default ProductsPage;
