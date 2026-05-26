import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'

function App() {
  return (
    <div className="min-h-screen text-ink">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
