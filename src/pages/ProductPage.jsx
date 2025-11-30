import React, { useState } from 'react';
import {
  Star, ShoppingCart, ArrowLeft, Plus, Minus,
  Truck, MapPin, Clock, Calculator
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import '@/styles/product.css';

export function ProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [zipCode, setZipCode] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="product-page-container text-center">
        <h1 className="text-2xl font-bold">Produto não encontrado.</h1>
        <Button onClick={() => navigate('/')} className="mt-4">
          Voltar para a loja
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const formatZipCode = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  const handleZipCodeChange = (e) => {
    const formatted = formatZipCode(e.target.value);
    setZipCode(formatted);
  };

  const calculateShipping = () => {
    const zipNumbers = zipCode.replace(/\D/g, '');
    if (zipNumbers.length !== 8) {
      alert('CEP deve ter 8 dígitos');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const mockShippingOptions = [
        { name: 'PAC', price: 12.90, days: '8 a 12 dias úteis', description: 'Correios - Econômico' },
        { name: 'SEDEX', price: 25.50, days: '3 a 5 dias úteis', description: 'Correios - Rápido' },
        { name: 'Express', price: 35.00, days: '1 a 2 dias úteis', description: 'Entrega expressa' }
      ];

      if (product.price * quantity >= 200) {
        mockShippingOptions.forEach(option => {
          if (option.name === 'PAC') {
            option.price = 0;
            option.description = 'Correios - Grátis';
          }
        });
      }

      setShippingOptions(mockShippingOptions);
      setIsCalculating(false);
      setHasCalculated(true);
    }, 1500);
  };

  return (
    <div className="product-page-container">
      <Button onClick={() => navigate('/')} variant="ghost" className="product-page-back-button">
        <ArrowLeft />
        Voltar para a loja
      </Button>

      <div className="product-page-layout">
        {/* Imagem */}
        <div>
          <Card className="product-page-image-card">
            <CardContent className="product-page-image-wrapper">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="product-page-image"
              />
            </CardContent>
          </Card>
        </div>

        {/* Informações */}
        <div className="product-page-info">
          <div>
            <div className="product-page-header">
              <h1 className="product-page-title">{product.name}</h1>
              <Badge variant="secondary">{product.category}</Badge>
            </div>

            <div className="product-page-rating">
              <div className="product-page-rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                  />
                ))}
              </div>
              <span className="product-page-rating-text">
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>

            <div className="product-page-price">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="product-page-description-title">Descrição</h3>
            <p className="product-page-description-text">{product.description}</p>
          </div>

          <Separator />

          {/* Controles de Compra */}
            <div className="product-page-purchase-section"> 
            <div>
              <label className="product-page-quantity-label">Quantidade</label>
              <div className="product-page-quantity-selector">
                <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
                  <Minus />
                </Button>
                <span className="product-page-quantity-display">{quantity}</span>
                <Button variant="outline" size="icon" onClick={increaseQuantity}>
                  <Plus />
                </Button>
              </div>
            </div>

            <div className="product-page-actions">
              <Button onClick={handleAddToCart} size="lg"> 
                <ShoppingCart className="w-5 h-5 mr-2" />
                Adicionar ao Carrinho
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  handleAddToCart();
                  navigate('/cart');
                }}
              >
                Comprar Agora
              </Button>
            </div>
          </div>

          <Separator />

          {/* Calculadora de Frete */}
          <Card>
            <CardHeader>
              <CardTitle className="product-page-shipping-title">
                <Calculator />
                Calcular Frete e Prazo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="product-page-shipping-form">
                <div className="product-page-shipping-input-wrapper">
                  <Label htmlFor="zipCode">CEP de entrega</Label>
                  <Input
                    id="zipCode"
                    type="text"
                    placeholder="00000-000"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    maxLength={9}
                  />
                </div>
                <Button
                  onClick={calculateShipping}
                  disabled={isCalculating || zipCode.replace(/\D/g, '').length !== 8}
                  className="product-page-shipping-button"
                >
                  {isCalculating ? (
                    <>
                      <div className="product-page-shipping-loading-spinner"></div>
                      Calculando...
                    </>
                  ) : 'Calcular'}
                </Button>
              </div>

              {!hasCalculated && (
                <div className="product-page-shipping-default-text">
                  <MapPin />
                  Informe seu CEP para calcular o frete e prazo de entrega
                </div>
              )}

              {hasCalculated && shippingOptions.length > 0 && (
                <div className="product-page-shipping-results">
                  <h4 className="product-page-shipping-title">
                    <Truck />
                    Opções de Entrega
                  </h4>
                  {shippingOptions.map((option, index) => (
                    <div key={index} className="product-page-shipping-result-item">
                      <div className="product-page-shipping-result-header">
                        <div>
                          <div className="product-page-shipping-result-details">{option.name}</div>
                          <div className="product-page-shipping-result-description">{option.description}</div>
                        </div>
                        <div className="product-page-shipping-result-price-time">
                          <div className={option.price === 0
                            ? 'product-page-shipping-result-price-free'
                            : 'product-page-shipping-result-price'}>
                            {option.price === 0 ? 'Grátis' : `R$ ${option.price.toFixed(2).replace('.', ',')}`}
                          </div>
                          <div className="product-page-shipping-result-time">
                            <Clock />
                            {option.days}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="product-page-shipping-footer-text">
                    <p>• Prazos contados em dias úteis após a confirmação do pagamento</p>
                    <p>• Para produtos em estoque</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <Separator />

          {/* Informações Adicionais */}
          <div className="product-page-info-list">
            <p>✓ Frete grátis para pedidos acima de R$ 200</p>
            <p>✓ Garantia de 12 meses</p>
            <p>✓ Devolução gratuita em até 30 dias</p>
            <p>✓ Produto em estoque - Pronto para envio</p>
          </div>
        </div>
      </div>
    </div>
  );
}