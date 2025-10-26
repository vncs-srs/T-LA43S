import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { HomePage } from 'react-router-dom'

export function HomePage({ products, onProductClick }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo ao nosso Marketplace</h1>
        <p className="text-muted-foreground text-lg">
          Descubra produtos incríveis com os melhores preços e qualidade garantida.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            Nenhum produto encontrado com os filtros selecionados.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}