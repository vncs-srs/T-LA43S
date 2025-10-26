import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

// Imports de UI Corrigidos
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export function Navbar({ onSearchChange, onMenuToggle }) { // Removidos currentPage e onNavigate
  const [searchTerm, setSearchTerm] = useState('');
  const { getTotalItems } = useCart();
  const navigate = useNavigate(); // Novo hook

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-blur:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo e Menu */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onMenuToggle} className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <button 
            onClick={() => navigate('/')}
            className="font-bold text-xl text-primary hover:text-primary/80 transition-colors"
          >
            Marketplace
          </button>
        </div>

        {/* Barra de Pesquisa Central */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Menu de Usuario e Carrinho */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/cart')}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {getTotalItems() > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {getTotalItems()}
              </Badge>
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => navigate('/login')}
          >
            <User className="h-4 w-4 mr-2" />
            Entrar
          </Button>
          
          <Button 
            onClick={() => navigate('/register')}
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </nav>
  );
}