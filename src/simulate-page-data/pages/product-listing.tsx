// pages/ProductListingPage.tsx
import React, { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  category: string;
  rating: number;
}

const ProductListingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts([
        { id: '1', name: 'Wireless Headphones', price: 99.99, category: 'electronics', rating: 4.5 },
        { id: '2', name: 'Running Shoes', price: 129.99, category: 'sports', rating: 4.2 },
        { id: '3', name: 'Coffee Maker', price: 79.99, category: 'home', rating: 4.7 },
        { id: '4', name: 'Smartphone', price: 699.99, category: 'electronics', rating: 4.3 }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="product-listing-page">
      <div className="page-header">
        <h1>Products</h1>
        <div className="filters">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="sports">Sports</option>
            <option value="home">Home</option>
          </select>
        </div>
      </div>
      
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className="image-placeholder">📦</div>
              )}
            </div>
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <p className="rating">⭐ {product.rating}/5</p>
            <button onClick={() => window.location.href = `/products/${product.id}`}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
