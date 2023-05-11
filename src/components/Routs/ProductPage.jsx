import { useParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import { Products } from "../Atoms"


const ProductPage = () => {
  const { id } = useParams()
  
  const [products, setProducts] = useRecoilState(Products)
  

  const product = products.find((product) => product.id === parseInt(id))
  

  if(!product) {
    return <div>Product not found</div>
  }

  return (
    <section className="product-page">
      <div className="img-container">
        <img src={product.picture} alt={product.name} />
      </div>
      <div className="name-n-price-container">
        <p>{product.name}</p>
        <p>{product.price} Kr</p>
      </div>
      <button>
        Lägg till varukorg
      </button>
      <div className="product-info">
        <h3>Product Info</h3>
        <p>{product.description}</p>
      </div>
    </section>
  )
}

export default ProductPage