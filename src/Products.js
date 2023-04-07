import axios from "axios";
const API = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";

export const product = async () => {
  const data = await axios.get(API);
  // console.log(data.data);
};

// export const pricelowtohigh = async () => {
//   const data = await axios.get(API)
//   const product = [...this.state.data]
//   console.log(product);
// };
