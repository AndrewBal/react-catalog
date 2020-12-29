import axios from 'axios'

export default axios.create({
  baseURL: `https://react-catalog-f8902-default-rtdb.firebaseio.com/`,
})
