import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import '@/styles/ProductCard.css';

export function ProductCard({ product, onProductClick }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="product-card" onClick={() => onProductClick(product)}>
      <CardContent className="product-card-image-wrapper">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
      </CardContent>

      <div className="product-card-content">
        <div className="product-card-header">
          <h3 className="product-card-title">{product.name}</h3>
          <Badge variant="secondary" className="product-card-badge">
            {product.category}
          </Badge>
        </div>

        <p className="product-card-description">{product.description}</p>

        <div className="product-card-rating">
          <div className="product-card-rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
              />
            ))}
          </div>
          <span className="product-card-rating-text">
            {product.rating} ({product.reviews})
          </span>
        </div>
      </div>

      <CardFooter className="product-card-footer">
        <div className="product-card-price-wrapper">
          <span className="product-card-price">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <Button size="sm" onClick={handleAddToCart} className="product-card-add-button">
          <ShoppingCart />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
}
