import React from 'react';
import { X } from 'lucide-react';
import { categories, priceRanges } from '../data/products';

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
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-background border-r z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:top-0 lg:translate-x-0 lg:z-0
      `}>
        <div className="p-4">
          {/* Header do Sidebar */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h2>Filtros</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Categorias */}
          <Card className="p-4 mb-6">
            <h3 className="mb-4">Categorias</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`
                    w-full text-left px-3 py-2 rounded-md transition-colors text-sm
                    ${selectedCategory === category 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </Card>

          <Separator className="my-4" />

          {/* Faixa de Preço */}
          <Card className="p-4">
            <h3 className="mb-4">Faixa de Preço</h3>
            <RadioGroup 
              value={selectedPriceRange} 
              onValueChange={onPriceRangeChange}
              className="space-y-2"
            >
              {priceRanges.map((range) => (
                <div key={range.label} className="flex items-center space-x-2">
                  <RadioGroupItem value={range.label} id={range.label} />
                  <Label htmlFor={range.label} className="text-sm cursor-pointer">
                    {range.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </Card>

          {/* Botão limpar filtros */}
          <Button 
            variant="outline" 
            className="w-full mt-4"
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