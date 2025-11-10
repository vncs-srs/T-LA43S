import React from 'react';
import { X } from 'lucide-react';
import { categories, priceRanges } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import '@/styles/sidebar.css';

export function Sidebar({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange,
  selectedPriceRange,
  onPriceRangeChange,
}) {
  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="sidebar-overlay lg:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          
          {/* Header do Sidebar */}
          <div className="sidebar-header">
            <h2>Filtros</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Categorias */}
          <Card className="sidebar-filter-card">
            <h3 className="sidebar-filter-title">Categorias</h3>
            <div className="sidebar-category-list">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`sidebar-category-button ${
                    selectedCategory === category ? 'selected' : ''
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Card>

          <Separator className="my-4" />

          {/* Faixa de Preço */}
          <Card className="sidebar-filter-card">
            <h3 className="sidebar-filter-title">Faixa de Preço</h3>
            <RadioGroup 
              value={selectedPriceRange} 
              onValueChange={onPriceRangeChange}
              className="sidebar-radio-group"
            >
              {priceRanges.map((range) => (
                <div key={range.label} className="sidebar-radio-item-wrapper">
                  <RadioGroupItem value={range.label} id={range.label} />
                  <Label htmlFor={range.label} className="sidebar-radio-label">
                    {range.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </Card>

          {/* Botão limpar filtros */}
          <Button 
            variant="outline" 
            className="sidebar-clear-button"
            onClick={() => {
              onCategoryChange('Todas as Categorias');
              onPriceRangeChange('Todos os preços');
            }}
          >
            Limpar Filtros
          </Button>
        </div>
      </aside>
    </>
  );
}
