import { ProductModel } from '../../../models/ProductModel';

export const searchProduct = (text:string, products: ProductModel[]) => {
	if (text === "") {
		return products;
	}
	return products.filter((category) => category.title.includes(text));
};
