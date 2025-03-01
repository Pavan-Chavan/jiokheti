import axios from "axios";
import { serverApi } from "../utils/config";
import { toast } from "react-toastify";
import { defaultMeta } from "../constants/PageMetaContants";

export const fetchSubCategory = async (setSubCategories,category_name) => {
	try {
		const response = await axios.get(`${serverApi}/api/sub-categories/get-sub-categories`,{
			headers : {categories : [category_name]}
		});
		if (response.status === 200) {
			setSubCategories(response.data);
		} else {
			toast.error("Unable to fetch sub category"); // TODO : Manoj, Make this statement in marathi
			setSubCategories([]);
		}
	} catch (error) {
		toast.error("Unable to fetch sub category");
	}
}

export const fetchSubCategoryFromSlug = async (setSubcategory, slug) => {
	try {
		const response = await axios.get(`${serverApi}/api/sub-categories/get-sub-category/${slug}`);
		if (response.status === 200) {
			setSubcategory(response.data);
		} else {
			toast.error("Unable to fetch sub category"); // TODO : Manoj, Make this statement in marathi
			setSubcategory([]);
		}
	} catch (error) {
		toast.error("Unable to fetch sub category");
	}
}

export const fetchSubCategoryMeta = async (slug) => {
	try {
		const response = await axios.get(`${serverApi}/api/sub-categories/get-sub-category/${slug}`);
		if (response.status === 200) {
			return response.data;
		} else {
			toast.error("Unable to fetch sub category"); // TODO : Manoj, Make this statement in marathi
			return defaultMeta;
		}
	} catch (error) {
		toast.error("Unable to fetch sub category");
	}
}