import Root from './components/Routs/Root.jsx'
import HomePage from './components/Routs/Homepage.jsx'
import ProductsPage from './components/Routs/ProductsPage.jsx'
import ProductPage from './components/Routs/ProductPage.jsx'
import AdminPage from './components/Routs/AdminPage.jsx'
import AdminUsers from './components/Routs/AdminUsers.jsx'
import AdminProducts from './components/Routs/AdminProducts.jsx'
import CartPage from './components/Routs/CartPage.jsx'
import ErrorPage from './components/Routs/ErrorPage.jsx'
import { createHashRouter } from 'react-router-dom'

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "product/:id",
        element: <ProductPage />
      },
      {
        path: "admin",
        element: <AdminPage />,

        children: [
          {
            path: "users",
            element: <AdminUsers />
          },
          {
            path: "products",
            element: <AdminProducts />
          }
        ]
      },
      {
        path: "cart",
        element: <CartPage />
      }
    ],

    errorElement: <ErrorPage />
  }
])
