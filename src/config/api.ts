export const API_DOMAIN = "https://newsdata.io/api/1/news?&language=en&&country=us&category="
export const API_KEY = "pub_10284d8ed0f5f35c3af43cdc38776d61b9242"
export const endpointPath = (category: any, page?: any) => `${API_DOMAIN}${category}&apiKey=${API_KEY}&page=${page || 1}`;
