export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas as Categorias');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Todos os preços');

  // ... mantenha o filteredProducts useMemo ...

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar
          onSearchChange={setSearchTerm}
          onMenuToggle={toggleSidebar}
        />

        <div className="flex flex-1">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPriceRange={selectedPriceRange}
            onPriceRangeChange={setSelectedPriceRange}
          />

          <main className="flex-1 lg:ml-64">
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
