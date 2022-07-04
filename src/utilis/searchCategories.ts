export const searchCategories = (text, categories) => {
	if (text === "") {
		return categories;
	}
	return categories.filter((category) => category.includes(text));
};
