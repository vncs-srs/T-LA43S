import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ProductCard } from '@/components/ProductCard';
import '@/styles/homepage.css';

export function HomePage({ products }) {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } }); 
  };

  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1 className="homepage-title">Bem-vindo ao nosso Marketplace</h1>
        <p className="homepage-subtitle">
          Descubra produtos incríveis com os melhores preços e qualidade garantida.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="homepage-no-products">
          <p>
            Nenhum produto encontrado com os filtros selecionados.
          </p>
        </div>
      ) : (
        <div className="homepage-product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
