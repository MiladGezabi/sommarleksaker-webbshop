

export const handleAddProduct = (product, cartItems, setCartItems) => {
  const productExist = cartItems.find((item) => item.id === product.id)
  if(productExist){
      setCartItems(prev => prev.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity + 1}: item))
  } else {
      setCartItems(prev => [...prev, {...product, quantity: 1 }])
  }
}

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