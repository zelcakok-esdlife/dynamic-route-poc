// pages/ProductDetailPage.tsx
import { useSPAHooks } from "@/spa/hook";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface ProductDetail {
  id: string;
  name: string;
  price: number;
  description?: string;
  images?: string[];
  category: string;
  rating: number;
  reviews?: number;
  inStock?: boolean;
}

const data = [
  { id: "1", name: "Wireless Headphones", price: 99.99, category: "electronics", rating: 4.5 },
  { id: "2", name: "Running Shoes", price: 129.99, category: "sports", rating: 4.2 },
  { id: "3", name: "Coffee Maker", price: 79.99, category: "home", rating: 4.7 },
  { id: "4", name: "Smartphone", price: 699.99, category: "electronics", rating: 4.3 },
];

const ProductDetailPage: React.FC = () => {
  const { getRouteParams } = useSPAHooks();
  const { params } = getRouteParams();
  const { productId } = params;
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProduct(data[parseInt(productId, 10) - 1]);
      setLoading(false);
    }, 400);
  }, [productId]);

  if (loading) return <div>Loading product...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail-page">
      <button onClick={() => window.history.back()} className="back-button">
        ← Back to Products
      </button>

      <div className="product-detail-container">
        <div className="product-images">
          <div className="main-image">
            <div className="image-placeholder">📷</div>
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="category">{product.category}</p>
          <div className="rating">
            <span>⭐ {product.rating}/5</span>
            <span>({product.reviews} reviews)</span>
          </div>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>

          <div className="purchase-section">
            <div className="quantity-selector">
              <label>Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>
            <button className="add-to-cart" disabled={!product.inStock}>
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
