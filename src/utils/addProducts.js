


const url = "https://www.forverkliga.se/JavaScript/api/fe/"
const shopId = 1009


async function addProduct(name, price, description, picture) {
  console.log("adding products")

  const data = {
    action: "add-product",
    name: name,
    price: price,
    description: description,
    picture: picture,
    shopid: shopId
  }

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
  const response = await fetch(url, options)
  const statusObject = await response.json()

  console.log("response from api", statusObject)

}

export default addProduct