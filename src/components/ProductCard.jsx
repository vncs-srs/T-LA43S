import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import '@/styles/productCard.css';

export function ProductCard({ product, onProductClick }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={() => onProductClick(product)}
    >
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <Badge variant="secondary" className="ml-2 shrink-0">
              {product.category}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
          
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-1">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-primary">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
        
        <Button 
          size="sm" 
          onClick={handleAddToCart}
          className="shrink-0"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
}