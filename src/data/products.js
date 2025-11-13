export const mockProducts = [
  {
    id: '1',
    name: 'Laptop ',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1643290369779-c6bec760cf18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGxhcHRvcCUyMGNvbXB1dGVyfGVufDF8fHx8MTc1OTIyMjMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Eletrônicos',
    description: 'Laptop de alta performance top.',
    rating: 4.8,
    reviews: 124
  },
    {
    id: '2',
    name: 'churaquira ',
    price: 47.55,
    image: 'https://images.unsplash.com/photo-1643290369779-c6bec760cf18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGxhcHRvcCUyMGNvbXB1dGVyfGVufDF8fHx8MTc1OTIyMjMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Casa e Jardim',
    description: 'Laptop de alta performance top.',
    rating: 4.8,
    reviews: 124
  },
  

];

export const categories = [
  'Todas as Categorias',
  'Eletrônicos',
  'Moda',
  'Livros',
  'Casa e Jardim',
  'Esportes',
  'Beleza',
  'Automotivo'
];

export const priceRanges = [
  { label: 'Todos os preços', min: 0, max: Infinity },
  { label: 'Até R$ 100', min: 0, max: 100 },
  { label: 'R$ 100 - R$ 500', min: 100, max: 500 },
  { label: 'R$ 500 - R$ 1000', min: 500, max: 1000 },
  { label: 'Acima de R$ 1000', min: 1000, max: Infinity }
];