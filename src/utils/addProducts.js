import { useRecoilState } from "recoil";
import { Products } from "../components/Atoms";

const url = "https://forverkliga.se/JavaScript/api/fe"
const shopId = 1009

const data = {
  action: "add-product",
  name: "",
  price: null,
  discription: "",
  picture: "",
  shopid: shopId
}

async function addProduct(oneProduct) {
  console.log("adding products")

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(oneProduct)
  }
  const response = await fetch(url, options)
  const statusObject = await response.json()

  console.log("response from api", statusObject)

}

async function addAllTheProducts() {
  const [products, setProducts] = useRecoilState(Products)

  products.map(x => ({...data, name: "" + x.name, price: null + x.price, discription: "" + x.discription, picture: "" + x.picture}))
  

  products.forEach(product => {
    addProduct(product)
  })
}

export default addAllTheProducts