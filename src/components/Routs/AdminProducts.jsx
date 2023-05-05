import ProductsPage from "./ProductsPage";

const AdminProducts = () => {

  return (
    <>
    <section className="admin-main">

    <div className="form-box">
    
      <h3>
        Lägg till en ny vara
      </h3>

      <form action="">
        <input placeholder="Produktnamn" type="text" />
        <input placeholder="Pris" type="text" />
        <input placeholder="Bild URL" type="text" />
        <textarea placeholder="Productbeskrivning" name="" id="" cols="30" rows="10"></textarea>

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