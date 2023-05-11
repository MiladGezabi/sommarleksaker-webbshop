
// funktion för att lägga till produkt till varukorgen
export const handleAddProduct = (product, cartItems, setCartItems) => {
  const productExist = cartItems.find((item) => item.id === product.id)
  if(productExist){
      setCartItems(prev => prev.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity + 1}: item))
  } else {
      setCartItems(prev => [...prev, {...product, quantity: 1 }])
  }
}

// funktion för att ta bort saker från varukorgen
export const handleRemoveProduct = (product, cartItems, setCartItems) => {
  const productExist = cartItems.find((item) => item.id === product.id)
  if(productExist.quantity === 1){
    setCartItems(cartItems.filter((item) => item.id !== product.id))
  } else {
    setCartItems((item) => {
      item.id === product.id
      ? {...productExist, quantity: productExist.quantity -1}
      : item
    })
  }
}


// funktion för att ta bort produkt som admin.
export const handleDelete = (products, productId) => {
  setProducts(products.filter((product) => product.id !== productId))
}