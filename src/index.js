import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'))

//dev-o23tea21jdb8fvww.us.auth0.com

//eZzYX8iwB4sQAavhKlQQtsc37UVT7Al3

root.render(
  <Auth0Provider
    domain="dev-o23tea21jdb8fvww.us.auth0.com"
    clientId="eZzYX8iwB4sQAavhKlQQtsc37UVT7Al3"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
)
