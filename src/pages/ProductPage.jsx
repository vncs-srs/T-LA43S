import React, { useState } from 'react';
import { Star, ShoppingCart, ArrowLeft, Plus, Minus, Truck, MapPin, Clock, Calculator } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ImageWithFallback } from '@/components/ImageWithFallback';

export function ProductPage() { 
  const location = useLocation();
  const navigate = useNavigate();
  // Busca o produto a partir do estado de navegação
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [zipCode, setZipCode] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const { addToCart } = useCart();

  // Tratamento caso o produto não seja encontrado
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
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
    
    // Simulação de API de frete
    setTimeout(() => {
      const mockShippingOptions = [
        {
          name: 'PAC',
          price: 12.90,
          days: '8 a 12 dias úteis',
          description: 'Correios - Econômico'
        },
        {
          name: 'SEDEX',
          price: 25.50,
          days: '3 a 5 dias úteis',
          description: 'Correios - Rápido'
        },
        {
          name: 'Express',
          price: 35.00,
          days: '1 a 2 dias úteis',
          description: 'Entrega expressa'
        }
      ];

      // Frete grátis para pedidos acima de R$ 200
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
    <div className="container mx-auto px-4 py-6">
      {/* Botão Voltar */}
      <Button 
        variant="ghost" 
        onClick={() => onNavigate('home')}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para a loja
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Imagem do Produto */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-square overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Informações do Produto */}
        <div className="space-y-6">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <Badge variant="secondary">{product.category}</Badge>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>

            <div className="text-4xl font-bold text-primary mb-6">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-2">Descrição</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator />

          {/* Controles de Compra */}
          <div className="space-y-4">
            <div>
              <label className="font-semibold mb-2 block">Quantidade</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increaseQuantity}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleAddToCart}
                className="flex-1"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Adicionar ao Carrinho
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => {
                  handleAddToCart();
                  onNavigate('cart');
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
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Calcular Frete e Prazo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <div className="flex-1">
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
                <div className="flex items-end">
                  <Button 
                    onClick={calculateShipping}
                    disabled={isCalculating || zipCode.replace(/\D/g, '').length !== 8}
                    className="min-w-[100px]"
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Calculando...
                      </>
                    ) : (
                      'Calcular'
                    )}
                  </Button>
                </div>
              </div>

              {hasCalculated && shippingOptions.length > 0 && (
                <div className="space-y-3 mt-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Opções de Entrega
                  </h4>
                  {shippingOptions.map((option, index) => (
                    <div key={index} className="border rounded-lg p-3 space-y-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{option.name}</div>
                          <div className="text-sm text-muted-foreground">{option.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">
                            {option.price === 0 ? 'Grátis' : `R$ ${option.price.toFixed(2).replace('.', ',')}`}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {option.days}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="text-xs text-muted-foreground mt-2">
                    <p>• Prazos contados em dias úteis após a confirmação do pagamento</p>
                    <p>• Para produtos em estoque</p>
                  </div>
                </div>
              )}

              {!hasCalculated && (
                <div className="text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Informe seu CEP para calcular o frete e prazo de entrega
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Separator />

          {/* Informações Adicionais */}
          <div className="text-sm text-muted-foreground space-y-1">
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