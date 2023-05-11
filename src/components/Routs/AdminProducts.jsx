import ProductsPage from "./ProductsPage";
import addProduct from "../../utils/addProducts";
import { useRecoilState } from "recoil";
import { Description, Picture, Price, ProductName } from "../Atoms";
import { useState } from "react";

const AdminProducts = () => {
  const [productName, setProductName] = useRecoilState(ProductName)
  const [price, setPrice] = useRecoilState(Price)
  const [picture, setPicture] = useRecoilState(Picture)
  const [description, setDescription] = useRecoilState(Description)
  const [validationErrors, setValidationErrors] = useState({
    productName: '',
    price: '',
    picture: '',
    description: '',
  })


  function handleSubmit(e) {
    e.preventDefault()
    if(validateForm()) {
      addProduct(productName, price, description, picture)
      setProductName("")
      setPicture("")
      setDescription("")
      setPrice("")
    }
  }

  const validateForm = () => {
    let isValid = true;
    const errors = {
      productName: '',
      price: '',
      picture: '',
      description: '',
    };
    if (productName.trim() === '') {
      errors.productName = 'Produktnamn är obligatoriskt';
      isValid = false;
    }
    if (isNaN(price) || price <= 0) {
      errors.price = 'Pris måste vara ett positivt tal';
      isValid = false;
    }
    if (!/^https?:\/\/.+/.test(picture)) {
      errors.picture = 'Bild-URL måste börja med http:// eller https://';
      isValid = false;
    }
    if (description.trim() === '') {
      errors.description = 'Beskrivning är obligatorisk';
      isValid = false;
    }
    setValidationErrors(errors);
    return isValid;
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
        {validationErrors.productName && (
          <div className="errormessage">{validationErrors.productName}</div>
        )}
        <input placeholder="Pris" type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)} />
         {validationErrors.price && (
          <div className="errormessage">{validationErrors.price}</div>
        )}
        <input placeholder="Bild URL" type="text" 
        value={picture}
        onChange={(e) => setPicture(e.target.value)}/>
        {validationErrors.picture && (
          <div className="errormessage">{validationErrors.picture}</div>
        )}
        <textarea placeholder="Productbeskrivning" name="" id="" cols="30" rows="10"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {validationErrors.description && (
          <div className="errormessage">{validationErrors.description}</div>
        )}

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