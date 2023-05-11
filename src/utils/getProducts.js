


const url = "https://www.forverkliga.se/JavaScript/api/fe/"
const shopId = 1009
async function getProducts() {
  
  const response = await fetch(url + "?action=get-products&shopid=" + shopId)
  const data = await response.json()
  
  return data
}

export default getProducts