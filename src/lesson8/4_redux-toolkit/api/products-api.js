export async function getProductsList() {
  const response = await fetch('https://61f5558a62f1e300173c40f3.mockapi.io/products')
  const status = response.status

  if (status === 200) {
    return await response.json()
  }

  const errorText = await response.text()

  throw new Error(errorText)
}