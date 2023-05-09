import ProductsPage from "./ProductsPage";
import addProduct from "../../utils/addProducts";
import { useRecoilState } from "recoil";
import { Description, Picture, Price, ProductName } from "../Atoms";

const AdminProducts = () => {
  const [productName, setProductName] = useRecoilState(ProductName)
  const [price, setPrice] = useRecoilState(Price)
  const [picture, setPicture] = useRecoilState(Picture)
  const [description, setDescription] = useRecoilState(Description)


  function handleSubmit(e) {
    e.preventDefault()
    addProduct(productName, price, description, picture)
    setProductName("")
    setPicture("")
    setDescription("")
    setPrice("")
  }
  
  
  return (
    <>
    <section className="admin-main">

    <div className="form-box">
    
      <h3>
        Lägg till en ny vara
      </h3>

      <form onSubmit={handleSubmit}>
        <input placeholder="Produktnamn" type="text" 
        value={productName}
        onChange={(e) => setProductName(e.target.value)} />
        <input placeholder="Pris" type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)} />
        <input placeholder="Bild URL" type="text" 
        value={picture}
        onChange={(e) => setPicture(e.target.value)}/>
        <textarea placeholder="Productbeskrivning" name="" id="" cols="30" rows="10"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button className="add-product-btn">
            Lägg till
        </button>
      </form>

    </div>

  </section>
    <ProductsPage />
    </>
  )
}

export default AdminProducts