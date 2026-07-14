import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import MobileDock from './components/layout/MobileDock.jsx'
import ScrollManager from './components/layout/ScrollManager.jsx'
import CustomPage from './pages/CustomPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ShopPage from './pages/ShopPage.jsx'

function App() {
  return (
    <div className="min-h-screen text-ink">
      <ScrollManager />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-xl focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Bỏ qua điều hướng
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-24 md:pb-0" tabIndex="-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/custom" element={<CustomPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileDock />
    </div>
  )
}

export default App
