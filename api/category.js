import { toast } from "react-toastify";
import { serverApi } from "../utils/config";
import axios from "axios";
import { defaultMeta } from "../constants/PageMetaContants";

export const fetchCategory = async (setCategories) => {
	try {
		const response = await axios.get(`${serverApi}/api/categories/get-categories`);
		if (response.status === 200) {
			setCategories(response.data.results);
		} else {
			toast.error("Unable to fetch category");
			setCategories([]);
		}
	} catch (error) {
		toast.error("Unable to fetch category");
	}
}

export const fetchCategoryFromSlug = async (setCategory, slug) => {
	try {
		const response = await axios.get(`${serverApi}/api/categories/get-categories/${slug}`);
		if (response.status === 200) {
			setCategory(response.data);
		} else {
			toast.error("Unable to fetch category");
			setCategory([]);
		}
	} catch (error) {
		toast.error("Unable to fetch category");
	}
}

export const fetchCategoryMeta = async (slug) => {
	try {
		const response = await axios.get(`${serverApi}/api/categories/get-categories/${slug}`);
		if (response.status === 200) {
			return response.data;
		} else {
			toast.error("Unable to fetch category");
			return defaultMeta;
		}
	} catch (error) {
		toast.error("Unable to fetch category");
	}
}
