import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addCartItem } from "../../redux/productSlide";
import './products.css'

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products/product');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddCartProduct = (product) => {
    dispatch(addCartItem(product));
  };

  const handleBuy = (product) => {
    dispatch(addCartItem(product));
    navigate("/cart");
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  }

  return (
    <div className="productsContainer">
      {selectedProduct && (
        <div className="productModal">
          <div className="productImageContainer">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="productImage"
            />
          </div>
          <div className="productDetails">
            <h3 className="productName">
              {selectedProduct.name}
            </h3>
            <p className="productCategory">{selectedProduct.category}</p>
            <p className="productPrice">
              <span className="productPriceSymbol">₹</span>
              <span>{selectedProduct.price}</span>
            </p>
            <div className="productActions">
              <button onClick={() => handleBuy(selectedProduct)} className="buyButton">Buy</button>
              <button onClick={() => handleAddCartProduct(selectedProduct)} className="addToCartButton">Add Cart</button>
            </div>
            <div className="productDescriptionContainer">
              <p className="productDescriptionTitle">Description : </p>
              <p className="productDescription">{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      )}
        {products.map((product) => (
          <div key={product._id} className="productCard" onClick={() => handleOpenModal(product)}>
            <div className="productImageContainer">
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
              />
            </div>
            <div className="productDetails">
              <h3 className="productName">
                {product.name}
              </h3>
             
    
              <div className="productActions">
                <button onClick={(e) => {e.stopPropagation(); handleBuy(product);}} className="buyButton">Buy</button>
                <button onClick={(e) => {e.stopPropagation(); handleAddCartProduct(product);}} className="addToCartButton">Add Cart</button>
              </div>
        
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
