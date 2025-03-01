import axios from "axios";
import { serverApi } from "../utils/config";
import { toast } from "react-toastify";

const blogs = [
    {
        id: '1',
        slug:'Automatically',
        title: 'We automatically search for andapply coupons when.',
        screens:'/images/blog/img-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Jenefer Willy',
        authorTitle:'Farmer',
        authorImg:'/images/blog/blog-avater/img-1.jpg',
        create_at: '14 AUG,21',
        blogSingleImg:'/images/blog/img-5.jpg', 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        slug:'traffic',
        title: 'How to get more traffic in your website of ecommerce.',
        screens: '/images/blog/img-2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Konal Biry',
        authorTitle:'Farmer',
        authorImg:'/images/blog/blog-avater/img-2.jpg',
        create_at: '16 AUG,21',
        blogSingleImg:'/images/blog/img-6.jpg', 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        slug:'Rules',
        title: '25 Rules and regulation to be successful in your business.',
        screens: '/images/blog/img-3.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem beatae errodio.',
        author: 'Jenefer Willy',
        authorTitle:'Farmer',
        authorImg:'/images/blog/blog-avater/img-3.jpg',
        create_at: '18 AUG,21',
        blogSingleImg:'/images/blog/img-7.jpg',
        comment:'95',
        blClass:'format-video',
    },
];

export const fetchBlogsCallBack = async (setHasMore, setBlogs, setPage, page, category, subCategory, hasMore, tag) => {
    if (!hasMore) return;
	try {
		const response = await axios.get(`${serverApi}/api/blogpost/get-blogs?category=${category}&subCategory=${subCategory}&tag=${tag}&page=${page}&limit=10`);
		if (response.status === 200) {
			const newBlogs = response.data.results;
			if (newBlogs.length === 0) {
            setHasMore(false)
            } else {
                setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs])
                setPage((prevPage) => prevPage + 1)
            }
		} else {
			toast.error("Unable to fetch category");
			setCategories([]);
		}
	} catch (error) {
		toast.error("Unable to fetch category");
	}
}

export const fetchTrendingBlogs = async (setFunction, category) => {
	try {
		const response = await axios.get(`${serverApi}/api/blogpost/get-blogs?category=${category}`);
		if (response.status === 200) {
			setFunction(response.data.results);
		} else {
			toast.error("Unable to fetch category");
		}
	} catch (error) {
		toast.error("Unable to fetch category");
	}
}

export const fetchBlogDetails = async (slug) => {
	try {
		const response = await axios.get(`${serverApi}/api/blogpost/get-blog?slug=${slug}`);
		if (response.status === 200) {
			return response.data;
		} else {
            console.log(response);	
		}
	} catch (error) {	
        console.log(error);			
	}
}

export default blogs;