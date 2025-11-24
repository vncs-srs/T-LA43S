export const mockProducts = [
  {
    id: '1',
    name: 'Laptop ',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1643290369779-c6bec760cf18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGxhcHRvcCUyMGNvbXB1dGVyfGVufDF8fHx8MTc1OTIyMjMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Eletrônicos',
    description: 'Laptop de alta performance com tela Ultra HD de 15 polegadas, processador Intel Core i7, 16GB RAM e SSD 512GB.',
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Smartphone Pro Max',
    price: 1899.99,
    image: 'https://images.unsplash.com/photo-1675953935267-e039f13ddd79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzU5MTUxOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Eletrônicos',
    description: 'Smartphone premium com câmera tripla de 108MP, tela OLED de 6.7", processador octa-core e bateria de 5000mAh.',
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'Camiseta Premium Cotton',
    price: 79.99,
    image: 'https://media.istockphoto.com/id/483960103/pt/foto/t-shirt-preta-em-branco-%C3%A0-frente-com-tra%C3%A7ado-de-recorte.jpg?s=612x612&w=0&k=20&c=2-eQtlzB6Cn_GarkQBJbwQjevDHSnKO3D6HzQiaP5F4=',
    category: 'Moda',
    description: 'Camiseta de algodão premium 100%, corte moderno, disponível em várias cores e tamanhos.',
    rating: 4.5,
    reviews: 67
  },
  {
    id: '4',
    name: 'Livro: Guia Completo de Programação',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1755634301758-78c27c0195bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpdGVyYXR1cmUlMjByZWFkaW5nfGVufDF8fHx8MTc1OTEyNzk3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Livros',
    description: 'Guia completo para aprender programação do zero, com exemplos práticos e exercícios.',
    rating: 4.9,
    reviews: 156
  },
  {
    id: '5',
    name: 'Tablet Pro 12"',
    price: 1299.99,
    image: 'https://media.istockphoto.com/id/1288020286/pt/foto/apple-ipad-air-4-in-sky-blue.jpg?s=612x612&w=0&k=20&c=qEUU5GWynguQOtmC_crsFrlhYbahTCHD6QA5pclnl1U=',
    category: 'Eletrônicos',
    description: 'Tablet profissional com tela de 12 polegadas, suporte a caneta stylus e teclado destacável.',
    rating: 4.6,
    reviews: 43
  },
  {
    id: '6',
    name: 'Jaqueta de Couro Premium',
    price: 399.99,
    image: 'https://media.istockphoto.com/id/1405990292/pt/foto/person-choosing-vintage-jacket-in-a-used-goods-store.jpg?s=612x612&w=0&k=20&c=azlRWfF_99wTuysj9_zrANUu_K0lLDRdPskGzYxJfOI=',
    category: 'Moda',
    description: 'Jaqueta de couro genuíno, design clássico e atemporal, perfeita para qualquer ocasião.',
    rating: 4.7,
    reviews: 92
  }
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