import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./components/pages/HomePage";
import NavBar from "./components/NavBar/index"
import AboutPage from "./components/pages/AboutPage";
import ProductsPage from "./components/pages/ProductsPage";
import ItemDetailPage from "./components/pages/ItemDetailPage"
import CartPage from "./components/pages/CartPage";
import { CartProvider } from "./context/CartContext";
import ViewPurchasePage from "./components/pages/ViewPurchasePage";



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='products'>
              <Route index element={<ProductsPage />} />
              <Route path=':productId' element={<ItemDetailPage />} />
            </Route>
            <Route path='category/:categoryId' element={<ProductsPage />} />
            <Route path='/Cart' element={<CartPage />} />
            <Route path='viewPurchase/:orderId' element={<ViewPurchasePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App;
