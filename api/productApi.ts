import axios from 'axios'
const API_URL = "https://s8hemrsz5o.to.intercept.rest/productDetails"
export const fetchProductDetails = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;

  }
}