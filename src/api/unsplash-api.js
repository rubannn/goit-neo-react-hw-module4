import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const ACCESS_KEY = import.meta.env.VITE_API_KEY;
const PER_PAGE = 25;

const instance = axios.create({
  baseURL: BASE_URL,
  params: { client_id: ACCESS_KEY },
});

export default async function fetchImage({ page, query }) {
  return instance.get("search/photos", {
    params: {
      page: page || 1,
      query,
      per_page: PER_PAGE,
    },
  });
}
