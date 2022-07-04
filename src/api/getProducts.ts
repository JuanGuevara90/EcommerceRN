import axios from "axios";
import {API} from '@env';

export const getProducts = () => axios.get(`${API}/products`);

export const getProductsByCategory = (query) => axios.get(`${API}/products/category/${query}`);