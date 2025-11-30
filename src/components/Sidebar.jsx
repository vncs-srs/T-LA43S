/* src/components/Sidebar.jsx */
import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
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
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const renderCategory = (category) => {
    // Verifica se existem subcategorias
    const hasSubcategories = category.subcategories && category.subcategories.length > 0;
    const isSelected = selectedCategory === category.label;
    const isOpen = openSubmenus[category.label];

    return (
      <div key={category.label}>
        <button
          onClick={() => {
            if (hasSubcategories) {
              toggleSubmenu(category.label);
            } else {
              onCategoryChange(category.label);
            }
          }}
          className={`sidebar-category-button ${isSelected ? 'selected' : ''}`}
        >
          <span className={hasSubcategories ? 'sidebar-submenu-trigger' : ''}>
            {category.label}
          </span>
          
          {hasSubcategories && (
            isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
          )}
        </button>

        {/* Submenu */}
        {hasSubcategories && isOpen && (
          <div className="sidebar-submenu">
            {category.subcategories.map((sub) => (
              <button
                key={sub.label}
                onClick={() => onCategoryChange(sub.label)}
                className={`sidebar-category-button sidebar-submenu-item ${
                  selectedCategory === sub.label ? 'selected' : ''
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {isOpen && (
        <div 
          className="sidebar-overlay lg:hidden" 
          onClick={onClose}
        />
      )}
      
      <aside className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          
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
              {/* Mapeamento usando a nova função renderCategory */}
              {categories.map((category) => renderCategory(category))}
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
              setOpenSubmenus({});
            }}
          >
            Limpar Filtros
          </Button>
        </div>
      </aside>
    </>
  );
}