import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./components/pages/HomePage";
import NavBar from "./components/NavBar/index"
import AboutPage from "./components/pages/AboutPage";
import ProductsPage from "./components/pages/ProductsPage";
import ItemDetailPage from "./components/pages/ItemDetailPage"
import CartPage from "./components/pages/CartPage";
import { CartProvider } from "./context/CartContext";


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
              <Route path='/Cart' element={<CartPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </CartProvider>
  )
}
export default App;
