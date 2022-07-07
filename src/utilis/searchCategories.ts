export const searchCategories = (text:string, categories: string[]) => {
	if (text === "") {
		return categories;
	}
	return categories.filter((category) => category.includes(text));
};
