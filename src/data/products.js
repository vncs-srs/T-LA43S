export const mockProducts = [
  {
    id: '1',
    name: 'Laptop ',
    price: 99.99,
    image: 'https://img.global.news.samsung.com/br/wp-content/uploads/2019/01/Samsung-Notebook-9-Pro.png',
    category: 'Eletrônicos',
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