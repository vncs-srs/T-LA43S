import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import '@/styles/navbar.css';

export function Navbar({ onSearchChange, onMenuToggle }) { 
  const [searchTerm, setSearchTerm] = useState('');
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <nav className="navbar-root">
      <div className="navbar-container">
        {/* Logo e Menu */}
        <div className="navbar-logo-menu">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onMenuToggle} 
            className="navbar-menu-toggle" 
          >
            <Menu className="h-5 w-5" />
          </Button>
          <button 
            onClick={() => navigate('/')}
            className="navbar-logo"
          >
            Marketplace
          </button>
        </div>

        {/* Barra de Pesquisa Central */}
        <div className="navbar-search-container">
          <div className="navbar-search-wrapper">
            <Search className="navbar-search-icon" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="navbar-search-input"
            />
          </div>
        </div>

        {/* Menu de Usuario e Carrinho */}
        <div className="navbar-actions">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/cart')}
            className="navbar-cart-button"
          >
            <ShoppingCart className="h-5 w-5" />
            {getTotalItems() > 0 && (
              <Badge 
                variant="destructive" 
                className="navbar-cart-badge"
              >
                {getTotalItems()}
              </Badge>
            )}
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => navigate('/login')}
          >
            <User className="navbar-login-icon" />
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