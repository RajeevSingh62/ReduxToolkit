import React from 'react'
import Header from './Component/Header'
import ProductsList from './Component/ProductsList'
import AddProducts from './Component/AddProducts'
import Cart from './Component/Cart'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

const App = () => {
  return (
  <>
<BrowserRouter>

<Header/>
<Routes>
  <Route path='/' element={<ProductsList/>}/>
  <Route path='/cart' element={<Cart/>}/>

</Routes>
</BrowserRouter>


  </>
  )
}

export default App