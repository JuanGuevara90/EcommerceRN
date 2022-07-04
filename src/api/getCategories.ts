import axios from "axios";
import {API} from "@env";

export const getCategories = () => axios.get(`${API}/products/categories`);

