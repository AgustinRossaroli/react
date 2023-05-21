import './App.css'
import Products from './components/Products'
import Users from './components/Users'
import Category from './components/Category'
import LastProduct from './components/LastProduct'
import ProductList from './components/ProductList'

function App() {
  return (
    <div>
      <Products />
      <Users />
      <Category />
      <LastProduct />
      <ProductList />
    </div>
  )
}

export default App