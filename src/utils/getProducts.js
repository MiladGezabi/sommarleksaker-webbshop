


const url = "https://www.forverkliga.se/JavaScript/api/fe/"
const shopId = 1009
async function getProducts() {
  console.log("getting products...")
  const response = await fetch(url + "?action=get-products&shopid=" + shopId)
  const data = await response.json()
  console.log("data comes ...", data)
}

export default getProducts