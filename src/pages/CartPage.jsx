import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import '@/styles/cart.css';

export function CartPage() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="cart-page-empty">
          <ShoppingBag className="cart-page-empty-icon" />
          <h1 className="cart-page-empty-title">Seu carrinho está vazio</h1>
          <p className="cart-page-empty-text">
            Adicione produtos ao seu carrinho para continuar comprando.
          </p>
          <Button onClick={() => navigate('/')}>
            Continuar Comprando
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">Carrinho de Compras</h1>

      <div className="cart-page-layout">
        {/* Lista de Produtos */}
        <div className="cart-item-list">
          {items.map(({ product, quantity }) => (
            <Card key={product.id} className="cart-item-card">
              <CardContent className="cart-item-content">
                <div className="cart-item-layout">
                  <div className="cart-item-image-wrapper">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="cart-item-image"
                    />
                  </div>

                  <div className="cart-item-details">
                    <div>
                      <h3 className="cart-item-title">{product.name}</h3>
                      <p className="cart-item-category">{product.category}</p>
                    </div>

                    <div className="cart-item-controls">
                      <div className="cart-item-quantity-selector">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          disabled={quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="cart-item-quantity-display">{quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="cart-item-price-info">
                        <p className="cart-item-price-total">
                          R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
                        </p>
                        <p className="cart-item-price-each">
                          R$ {product.price.toFixed(2).replace('.', ',')} cada
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(product.id)}
                      className="cart-item-remove-button"
                    >
                      <Trash2 />
                      Remover
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="cart-page-actions">
            <Button variant="outline" onClick={() => navigate('/')}>
              Continuar Comprando
            </Button>
            <Button
              variant="outline"
              onClick={clearCart}
              className="cart-page-clear-button"
            >
              Limpar Carrinho
            </Button>
          </div>
        </div>

        {/* Resumo do Pedido */}
        <div>
          <Card className="cart-summary-card">
            <CardHeader>
              <CardTitle>Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="cart-summary-row">
                  <span>Subtotal ({getTotalItems()} itens)</span>
                  <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="cart-summary-row">
                  <span>Frete</span>
                  <span className="cart-summary-row-free">Grátis</span>
                </div>
              </div>

              <Separator />

              <div className="cart-summary-total">
                <span>Total</span>
                <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
              </div>

              <Button className="cart-checkout-button" size="lg">
                Finalizar Compra
              </Button>

              <div className="cart-summary-info">
                <p>✓ Compra 100% segura</p>
                <p>✓ Devolução gratuita em 30 dias</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
