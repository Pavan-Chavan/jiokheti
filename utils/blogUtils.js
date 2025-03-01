import { krushiMahaDomain } from "./config";

export const getImagePath = (featured_image) => {
	if (featured_image != "") {
		return `${krushiMahaDomain}/images/blog-thumbnail/${featured_image}`;
	} else {
		return "" // TODO : need to return a dummy image
	}
}

export function formatBlogDate(input) {
	const dateObj = new Date(input);
	const day = dateObj.getDate();
	const month = dateObj.toLocaleString("en-US", { month: "short" }); // Feb
	const year = dateObj.getFullYear();
  
	return `${day} ${month} ${year}`;
}