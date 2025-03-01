import axios from "axios";
import { serverApi } from "../utils/config";
import { timeAgo } from "../utils/utils";
import { viewToDBTable } from "../constants/consants";
const { JSDOM } = require("jsdom");

export const getMarketTypesDetails = async () => {
	try {
		const response = await axios.get(`${serverApi}/api/get-sections`);
		if (response.status === 200) {
			return response.data;
		} else {
			toast.error("Unable to market data");
		}
	} catch (error) {
		toast.error("Unable to market data");
	}
}

export const fetchMarketTableData = async (view,slug) => {
	try {
	const response = await axios.get(`${serverApi}/api/bajarbhav/getTable/${viewToDBTable[view]}/${slug}`);
	if (response.status === 200) {
		console.log("response.data"  + response);
		const data = JSON.parse(response.data.table_data); 

		const dom = new JSDOM(data);
		const doc = dom.window.document;

		const title2Div = doc.querySelector('.title2');

		if (title2Div) {
			title2Div.textContent = `Last update ${timeAgo(response.data.last_update)} ` + title2Div.textContent;
		}
		
		return {status : "sucess", data : doc.body.innerHTML};
	} else {
		return {status : "error", data : response.data};
	}
	} catch (err) {
		console.log(err);
		return {status : "error", data : err?.response?.data || "Something went wrong"};
	}
}