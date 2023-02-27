const { VITE_API_BASE_URL: API_BASE_URL } = import.meta.env;

const API_PATHS = {
  product: API_BASE_URL,
  order: API_BASE_URL,
  import: API_BASE_URL,
  bff: API_BASE_URL,
  cart: API_BASE_URL,
};

export default API_PATHS;
