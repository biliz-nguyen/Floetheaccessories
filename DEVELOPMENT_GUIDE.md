# 🌸 Floé - Hướng Dẫn Xây Dựng Toàn Diện

## Table of Contents
1. [Project Overview](#project-overview)
2. [Phase 1: Setup & Planning](#phase-1-setup--planning)
3. [Phase 2: Design System](#phase-2-design-system)
4. [Phase 3: Project Structure](#phase-3-project-structure)
5. [Phase 4: Frontend Development](#phase-4-frontend-development)
6. [Phase 5: Backend Development](#phase-5-backend-development)
7. [Phase 6: Database Setup](#phase-6-database-setup)
8. [Phase 7: Integration & Testing](#phase-7-integration--testing)
9. [Phase 8: Deployment](#phase-8-deployment)

---

## Project Overview

**Floé** - Trang web bán các phụ kiện thời trang có yếu tố hoa:
- 💇‍♀️ Hair Accessories (clips, pins, combs, slides)
- 👗 Waist Accessories (belts, chains, decorative waist)
- 📿 Necklaces & Chokers (statement necklaces, delicate chains)

**Target Audience**: Phụ nữ trẻ, fashionista, yêu thích style trang trí

**Tech Stack**:
- **Frontend**: React 18 + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Package Manager**: npm/yarn
- **Deployment**: Vercel (Frontend) + Railway/Heroku (Backend)

---

## Phase 1: Setup & Planning

### Step 1.1: Chuẩn Bị Dữ Liệu

**Trước khi code, bạn cần:**

1. **Danh sách Sản Phẩm** (tối thiểu 20-30)
   - Tên, mô tả, giá, danh mục
   - Màu sắc có sẵn
   - Hình ảnh (tối thiểu 2-3 ảnh/sản phẩm)

2. **Danh mục Chính**:
   ```
   - Hair Accessories
     └── Clips & Pins
     └── Hair Combs
     └── Hair Slides
   - Waist Accessories
     └── Belts
     └── Chains
     └── Decorative
   - Necklaces & Chokers
     └── Statement
     └── Delicate
     └── Chokers
   ```

3. **Collections** (theo theme):
   - Spring Collection
   - Summer Vibes
   - Boho Dreams
   - Date Night
   - Office Chic

### Step 1.2: Chuẩn Bị Môi Trường

**Cài đặt cần thiết**:
```bash
# Node.js (LTS)
# npm (included with Node.js)
# Git

# IDE: VS Code
```

**Kiểm tra cài đặt**:
```powershell
node --version
npm --version
git --version
```

---

## Phase 2: Design System

### Step 2.1: Color Palette

```
Primary Colors:
- Gold: #D4AF37
- Rose Gold: #B76E79
- Silver: #C0C0C0

Neutral:
- White: #FFFFFF
- Off-white: #F8F6F1
- Light Gray: #E8E6E1
- Dark Gray: #3D3D3D
- Black: #1A1A1A

Accent:
- Soft Pink: #F5E6E0
- Sage Green: #A8B8A8
- Cream: #FFFDD0
```

### Step 2.2: Typography

```
Font Family:
- Display: Georgia, Serif (elegant, feminine)
- Body: 'Inter', 'Segoe UI', sans-serif (clean, modern)

Sizes:
- H1: 48px (bold, homepage hero)
- H2: 36px (section title)
- H3: 24px (subsection)
- Body: 16px (standard text)
- Small: 14px (captions, metadata)
- Tiny: 12px (labels)
```

### Step 2.3: Component Library

**Reusable Components**:
- `Button` (Primary, Secondary, Ghost)
- `Card` (Product card, Collection card)
- `Header` (Navigation, Logo, Cart icon)
- `Footer` (Links, Newsletter, Social)
- `ProductGrid` (Responsive 2-4 columns)
- `FilterBar` (Category, Price range, Colors)
- `Navbar` (Sticky header)
- `Modal` (Quick view, Wishlist)

---

## Phase 3: Project Structure

### Step 3.1: Khởi Tạo Frontend

```bash
# Tạo React app
npx create-react-app floe-frontend
cd floe-frontend

# Cài Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Cài dependencies khác
npm install react-router-dom axios lucide-react
npm install -D prettier
```

### Step 3.2: Folder Structure (Frontend)

```
floe-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Button.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── FeaturedCollections.jsx
│   │   │   ├── NewArrivals.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── shop/
│   │   │   ├── ProductGrid.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   └── SortDropdown.jsx
│   │   ├── cart/
│   │   │   ├── Cart.jsx
│   │   │   └── Checkout.jsx
│   │   └── auth/
│   │       ├── Login.jsx
│   │       └── Register.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ShopPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── context/
│   │   ├── CartContext.jsx
│   │   ├── AuthContext.jsx
│   │   └── ProductContext.jsx
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── products.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.css
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

### Step 3.3: Khởi Tạo Backend

```bash
# Tạo backend folder
mkdir floe-backend
cd floe-backend

# Khởi tạo Node project
npm init -y

# Cài dependencies
npm install express cors dotenv pg bcryptjs jsonwebtoken
npm install -D nodemon
```

### Step 3.4: Folder Structure (Backend)

```
floe-backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── env.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Category.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   ├── users.js
│   │   └── categories.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── validators.js
│   │   └── helpers.js
│   └── server.js
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## Phase 4: Frontend Development

### Step 4.1: Tailwind Configuration

**tailwind.config.js**:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#D4AF37',
          600: '#B8860B',
        },
        rose: '#B76E79',
        sage: '#A8B8A8',
        cream: '#FFFDD0',
        offwhite: '#F8F6F1',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Step 4.2: Global Styles

**src/styles/globals.css**:
```css
@import url('https://fonts.googleapis.com/css2?family=Georgia:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  color: #3D3D3D;
  background-color: #FFFFFF;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Georgia', serif;
  font-weight: 700;
}

/* Remove default button styles */
button {
  border: none;
  cursor: pointer;
  font-family: inherit;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #F8F6F1;
}

::-webkit-scrollbar-thumb {
  background: #D4AF37;
  border-radius: 5px;
}
```

### Step 4.3: Router Setup

**src/App.jsx**:
```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
```

### Step 4.4: Key Components

#### Header Component (src/components/common/Header.jsx)
```javascript
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif font-bold text-gold-400">
          Floé
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-gold-400 transition">Home</Link>
          <Link to="/shop" className="hover:text-gold-400 transition">Shop</Link>
          <Link to="/about" className="hover:text-gold-400 transition">About</Link>
          <Link to="/contact" className="hover:text-gold-400 transition">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex gap-4">
          <button className="p-2 hover:bg-offwhite rounded-lg">
            <Heart size={20} />
          </button>
          <button className="p-2 hover:bg-offwhite rounded-lg">
            <ShoppingCart size={20} />
          </button>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-offwhite p-4 border-t border-gray-200">
          <Link to="/" className="block py-2 hover:text-gold-400">Home</Link>
          <Link to="/shop" className="block py-2 hover:text-gold-400">Shop</Link>
          <Link to="/about" className="block py-2 hover:text-gold-400">About</Link>
          <Link to="/contact" className="block py-2 hover:text-gold-400">Contact</Link>
        </nav>
      )}
    </header>
  );
}
```

#### Hero Component (src/components/home/Hero.jsx)
```javascript
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-96 md:h-screen bg-gradient-to-r from-cream to-offwhite flex items-center justify-center">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark-gray mb-4">
          Elevate Your Style
        </h1>
        <p className="text-lg md:text-2xl text-dark-gray mb-8 max-w-2xl mx-auto">
          Discover exquisite flower-inspired accessories for every moment
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-gold-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
```

#### Product Card Component (src/components/shop/ProductCard.jsx)
```javascript
import { Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition group">
      {/* Image Container */}
      <div className="relative bg-offwhite h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        
        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center gap-4 transition">
          <button className="opacity-0 group-hover:opacity-100 bg-white p-3 rounded-full transition">
            <Eye size={20} />
          </button>
          <button 
            className="opacity-0 group-hover:opacity-100 bg-white p-3 rounded-full transition"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold mt-2 hover:text-gold-400 transition">
            {product.name}
          </h3>
        </Link>
        
        {/* Colors */}
        <div className="flex gap-2 mt-3">
          {product.colors?.map(color => (
            <div 
              key={color}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gold-400">${product.price}</span>
          <button className="bg-gold-400 text-white px-4 py-2 rounded-lg hover:bg-gold-600 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
```

#### Filter Bar Component (src/components/shop/FilterBar.jsx)
```javascript
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FilterBar({ onFilterChange }) {
  const [expandedFilters, setExpandedFilters] = useState({});

  const toggleFilter = (filter) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  return (
    <div className="bg-offwhite p-4 rounded-lg">
      <h3 className="font-semibold mb-4">Filters</h3>

      {/* Category */}
      <div className="mb-4">
        <button 
          className="w-full flex justify-between items-center py-2 hover:text-gold-400"
          onClick={() => toggleFilter('category')}
        >
          <span className="font-semibold">Category</span>
          <ChevronDown 
            size={20} 
            className={`transform ${expandedFilters.category ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedFilters.category && (
          <div className="pl-4 space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Hair Accessories
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Waist Accessories
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Necklaces & Chokers
            </label>
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <button 
          className="w-full flex justify-between items-center py-2 hover:text-gold-400"
          onClick={() => toggleFilter('price')}
        >
          <span className="font-semibold">Price</span>
          <ChevronDown size={20} />
        </button>
        {expandedFilters.price && (
          <div className="pl-4 space-y-2">
            <label><input type="checkbox" /> Under $25</label>
            <label><input type="checkbox" /> $25 - $50</label>
            <label><input type="checkbox" /> $50 - $100</label>
            <label><input type="checkbox" /> $100+</label>
          </div>
        )}
      </div>

      {/* Colors */}
      <div>
        <button 
          className="w-full flex justify-between items-center py-2 hover:text-gold-400"
          onClick={() => toggleFilter('color')}
        >
          <span className="font-semibold">Colors</span>
          <ChevronDown size={20} />
        </button>
        {expandedFilters.color && (
          <div className="pl-4 flex gap-2 flex-wrap">
            {['Gold', 'Silver', 'Rose Gold', 'Black', 'White'].map(color => (
              <button 
                key={color}
                className="px-3 py-1 border border-gray-300 rounded-full hover:border-gold-400 hover:bg-offwhite transition"
              >
                {color}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

### Step 4.5: Shop Page Layout

**src/pages/ShopPage.jsx**:
```javascript
import { useState } from 'react';
import ProductGrid from '../components/shop/ProductGrid';
import FilterBar from '../components/shop/FilterBar';
import SortDropdown from '../components/shop/SortDropdown';

export default function ShopPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState({});

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-offwhite py-12 px-4">
        <h1 className="text-4xl font-serif font-bold text-center">Shop Collections</h1>
        <p className="text-center text-gray-600 mt-2">Discover our curated selections</p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <aside className="md:col-span-1">
            <FilterBar onFilterChange={setFilters} />
          </aside>

          {/* Main - Products */}
          <main className="md:col-span-3">
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600">Showing 24 products</p>
              <SortDropdown value={sortBy} onChange={setSortBy} />
            </div>

            {/* Product Grid */}
            <ProductGrid sortBy={sortBy} filters={filters} />
          </main>
        </div>
      </div>
    </div>
  );
}
```

---

## Phase 5: Backend Development

### Step 5.1: Server Setup

**src/server.js**:
```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/users', require('./routes/users'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
```

### Step 5.2: Database Config

**src/config/database.js**:
```javascript
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

export default pool;
```

### Step 5.3: Environment Variables

**.env**:
```
PORT=5000
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=floe_db
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

---

## Phase 6: Database Setup

### Step 6.1: Database Schema (PostgreSQL)

```sql
-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories Table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) UNIQUE,
  description TEXT,
  icon VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Subcategories Table
CREATE TABLE subcategories (
  id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Collections Table
CREATE TABLE collections (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE,
  description TEXT,
  cover_image VARCHAR(255),
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  sale_price DECIMAL(10, 2),
  category_id INT REFERENCES categories(id),
  subcategory_id INT REFERENCES subcategories(id),
  collection_id INT REFERENCES collections(id),
  stock INT DEFAULT 0,
  sku VARCHAR(100) UNIQUE,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Product Images Table
CREATE TABLE product_images (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  image_url VARCHAR(255) NOT NULL,
  alt_text VARCHAR(255),
  is_primary BOOLEAN DEFAULT FALSE,
  display_order INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Product Colors Table
CREATE TABLE product_colors (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  color_name VARCHAR(50),
  color_hex VARCHAR(7),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Wishlist Table
CREATE TABLE wishlists (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, product_id)
);

-- Orders Table
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  order_number VARCHAR(50) UNIQUE,
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  payment_method VARCHAR(50),
  shipping_address TEXT,
  tracking_number VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items Table
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INT REFERENCES orders(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id),
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  color VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews Table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255),
  comment TEXT,
  photos VARCHAR(255)[],
  helpful_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_collection ON products(collection_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_reviews_product ON reviews(product_id);
CREATE INDEX idx_wishlist_user ON wishlists(user_id);
```

### Step 6.2: Sample Data Insert

```sql
-- Categories
INSERT INTO categories (name, slug, description) VALUES
('Hair Accessories', 'hair-accessories', 'Hair clips, pins, and decorative pieces'),
('Waist Accessories', 'waist-accessories', 'Belts and waist chains'),
('Necklaces & Chokers', 'necklaces-chokers', 'Necklaces and choker styles');

-- Subcategories
INSERT INTO subcategories (category_id, name, slug) VALUES
(1, 'Clips & Pins', 'clips-pins'),
(1, 'Hair Combs', 'hair-combs'),
(1, 'Hair Slides', 'hair-slides'),
(2, 'Belts', 'belts'),
(2, 'Chains', 'chains'),
(3, 'Statement Necklaces', 'statement'),
(3, 'Delicate Chains', 'delicate'),
(3, 'Chokers', 'chokers');

-- Collections
INSERT INTO collections (name, slug, description, featured) VALUES
('Spring Collection', 'spring-collection', 'Fresh and floral designs for spring', TRUE),
('Summer Vibes', 'summer-vibes', 'Bright and vibrant summer collection', TRUE),
('Boho Dreams', 'boho-dreams', 'Bohemian inspired designs', FALSE),
('Date Night', 'date-night', 'Elegant pieces for special occasions', FALSE),
('Office Chic', 'office-chic', 'Professional and subtle accessories', FALSE);

-- Sample Products
INSERT INTO products (name, slug, description, price, category_id, subcategory_id, collection_id, stock, sku, featured) VALUES
('Golden Lily Hair Clip', 'golden-lily-clip', 'Delicate gold-plated hair clip with lily flower', 24.99, 1, 1, 1, 50, 'SKU001', TRUE),
('Rose Gold Chain Waist Belt', 'rose-gold-waist', 'Elegant rose gold chain belt', 49.99, 2, 5, 2, 30, 'SKU002', TRUE);
```

---

## Phase 7: Integration & Testing

### Step 7.1: API Integration (Frontend)

**src/services/api.js**:
```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const productAPI = {
  getAll: (params) => api.get('/products', { params }),
  getOne: (id) => api.get(`/products/${id}`),
  getFeatured: () => api.get('/products?featured=true'),
};

export const categoryAPI = {
  getAll: () => api.get('/categories'),
};

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (data) => api.post('/auth/register', data),
  logout: () => localStorage.removeItem('token'),
};

export default api;
```

### Step 7.2: Testing Checklist

- [ ] Homepage loads correctly
- [ ] Shop page displays all products
- [ ] Filter functionality works
- [ ] Product detail page shows correct info
- [ ] Add to cart works
- [ ] Cart updates correctly
- [ ] Responsive design on mobile
- [ ] Images load properly
- [ ] Navigation links work
- [ ] Color swatches display correctly

---

## Phase 8: Deployment

### Step 8.1: Frontend Deployment (Vercel)

```bash
# Login to Vercel
npm install -g vercel
vercel login

# Deploy
vercel

# Or connect GitHub repo automatically on vercel.com
```

### Step 8.2: Backend Deployment (Railway)

1. Push code to GitHub
2. Create Railway account
3. Connect GitHub repo
4. Set environment variables
5. Deploy

### Step 8.3: Production Checklist

- [ ] Environment variables configured
- [ ] Database backups enabled
- [ ] SSL certificate installed
- [ ] API rate limiting set up
- [ ] Error monitoring (Sentry)
- [ ] Performance monitoring
- [ ] CDN configured for images
- [ ] Payment gateway live
- [ ] Email service configured

---

## Development Timeline

| Phase | Timeline | Tasks |
|-------|----------|-------|
| Phase 1 | Week 1 | Setup, planning, data prep |
| Phase 2 | Week 1 | Design system, colors, typography |
| Phase 3 | Week 1-2 | Project scaffolding |
| Phase 4 | Week 2-3 | Frontend components & pages |
| Phase 5 | Week 2-3 | Backend API setup |
| Phase 6 | Week 2 | Database schema & sample data |
| Phase 7 | Week 3 | Integration & testing |
| Phase 8 | Week 4 | Deploy to production |

---

## Quick Start Commands

```bash
# Frontend
cd floe-frontend
npm install
npm start

# Backend (new terminal)
cd floe-backend
npm install
npm run dev

# Database
psql -U postgres
\c floe_db
# Run schema.sql file
```

---

## Key Resources

- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Express.js: https://expressjs.com
- PostgreSQL: https://www.postgresql.org
- Vercel: https://vercel.com
- Railway: https://railway.app

---

## Notes

- Keep component files focused and modular
- Use environment variables for sensitive data
- Implement proper error handling
- Test on mobile devices frequently
- Optimize images before upload
- Use semantic HTML for accessibility

Good luck! 🌸
