import './App.css'
import Products from './components/Products'
import Users from './components/Users'
import Category from './components/Category'
import LastProduct from './components/LastProduct'
import ProductList from './components/ProductList'
import Header from './components/Header'


function App() {
  return (
    <div>
      <Header />
      <Products />
      <Users />
      <Category />
      <LastProduct />
      <ProductList />
    </div>
  )
}

export default App