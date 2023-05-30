
const url = "https://www.forverkliga.se/JavaScript/api/fe/"
const shopId = 1009

function onDeleteProduct(product) {
  const productDelete = {
      action: 'delete-product',
      productid: product.id,
      shopid: shopId
  }
  deleteProduct(productDelete)
}


async function deleteProduct(pro) {
  console.log("Deleting product...");
	pro.shopid = shopId
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(pro)
	}
	const response = await fetch(url + '?action=delete-product', options)
	const statusObject = await response.json()
	console.log('Response from API: ', statusObject)
}

export default onDeleteProduct