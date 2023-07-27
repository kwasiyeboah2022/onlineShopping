import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  Home,
  About,
  SingleProduct,
  Cart,
  Products,
  PrivateRoute,
  Error,
  Checkout,
  AuthWrapper,
} from './pages/index'

//import Testing from './Testing'

// const Button = styled.button`
//   background: green;
//   color: white;
// `

// const Container = styled.div`
//   background: red;
//   color: white;
//   font-size: 2rem;
//   .hero {
//     font-size: 4rem;
//   }
// `

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route  path="/" element={<Home/>}/>
           
          <Route  path="/about" element={<About/>}/>
            
          <Route path="/cart" element={<Cart/>}/>
            
          <Route path="/products" element={<Products/>}/>
           
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path='checkout' element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
          } 
          />
          <Route  path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
