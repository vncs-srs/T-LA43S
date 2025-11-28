# Marketplace React

Este projeto é uma aplicação de **Marketplace (E-commerce)** desenvolvida como uma *Single Page Application* (SPA) utilizando **React** e **Vite**. A aplicação simula uma jornada completa de compra online, oferecendo catálogo de produtos, carrinho de compras, cálculo de frete e sistema de autenticação e cadastro.

## 📋 Funcionalidades

### 🛒 Experiência de Compra
* **Catálogo de Produtos:** Exibição de produtos com imagem, preço e avaliações na página inicial.
* **Detalhes do Produto:** Página exclusiva para cada item, permitindo visualizar a descrição completa, selecionar a quantidade desejada e adicionar ao carrinho.
* **Cálculo de Frete:** Simulação de prazo e custo de entrega baseada no CEP informado pelo usuário.

### 🔍 Navegação e Filtros
* **Barra de Pesquisa:** Localizada no topo, permite buscar produtos pelo nome ou descrição em tempo real.
* **Filtros Avançados (Sidebar):** Menu lateral para filtrar produtos por **Categoria** (ex: Eletrônicos, Moda) e **Faixa de Preço**. Em dispositivos móveis, este menu funciona como uma sobreposição (*overlay*).

### 🛍️ Gestão do Carrinho (`CartContext`)
O estado do carrinho é gerenciado globalmente via Context API:
* Adicionar e remover itens.
* Ajustar quantidades.
* Visualizar o subtotal e o valor total do pedido.
* **Persistência:** Os itens do carrinho são salvos automaticamente no `localStorage`, mantendo-os disponíveis mesmo após recarregar a página.

### 👤 Autenticação (Simulação)
* **Login:** Interface para acesso do usuário com opção de visualizar a senha.
* **Cadastro:** Formulário completo de registro, incluindo validação de campos como CPF e CEP, com os dados sendo armazenados localmente.

## 🚀 Tecnologias Utilizadas

* **[React](https://react.dev/)** (v18.3.1) - Biblioteca para construção da interface.
* **[Vite](https://vitejs.dev/)** (v6.4.1) - Ferramenta de build rápida e servidor de desenvolvimento.
* **[React Router DOM](https://reactrouter.com/)** (v7.9.4) - Gerenciamento de rotas e navegação entre páginas.
* **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna e leve.
* **CSS Puro:** Estilização organizada em módulos e variáveis globais (`index.css`) para facilitar a manutenção e consistência visual.

## 📦 Como Executar o Projeto

Certifique-se de ter o **Node.js** instalado em sua máquina.

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Para gerar a versão de produção (Build):**
    ```bash
    npm run build
    ```

## 📂 Estrutura de Pastas

* `src/components`: Componentes reutilizáveis (Navbar, Footer, Cards, UI base).
* `src/contexts`: Lógica global de estado (Carrinho de Compras).
* `src/data`: Dados mockados (lista de produtos).
* `src/pages`: Páginas principais da aplicação (Home, Login, Carrinho, Produto).
* `src/styles`: Arquivos CSS específicos para cada módulo.

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Desenvolvido por Vinicius Soares.