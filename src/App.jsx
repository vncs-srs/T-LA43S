import React, { useState, useMemo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import { mockProducts, priceRanges } from '@/data/products';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { ProductPage } from '@/pages/ProductPage';
import { CartPage } from '@/pages/CartPage';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import '@/styles/app.css';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas as Categorias');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Todos os preços');

  const location = useLocation();

  const showSidebar = location.pathname === '/';

  // Lógica de filtragem
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas as Categorias' || 
                              product.category === selectedCategory;
      const range = priceRanges.find(r => r.label === selectedPriceRange) || priceRanges[0];
      const matchesPrice = product.price >= range.min && product.price <= range.max;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedPriceRange]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <CartProvider>
      <div className="app-container">
        <Navbar
          onSearchChange={setSearchTerm}
          onMenuToggle={toggleSidebar}
        />

        <div className="app-layout">
          {showSidebar && (
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedPriceRange={selectedPriceRange}
              onPriceRangeChange={setSelectedPriceRange}
            />
          )}

          <main className={`app-main-content ${!showSidebar || !sidebarOpen ? 'no-sidebar' : ''}`}>
            <Routes>
              <Route path="/" element={<HomePage products={filteredProducts} />} />
              <Route path="/product/:id" element={<ProductPage />} /> 
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </CartProvider>
  );
}