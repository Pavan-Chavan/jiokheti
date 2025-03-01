import React from 'react';
import Link from "next/link";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";


const Reviews = () => {
    return (
        <Grid className="prdTabContent faqReview">
            <Grid className="reviewItems">
                <Grid className="reviewImg">
                    <img src='/images/product-details/author.png' alt="author1"/>
                </Grid>
                <Grid className="reviewContent">
                    <h2><Link href="/">Philip M. Hankins</Link></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi deleniti
                        doloremque eos illum officiis, perferendis quidem. Architecto incidunt magni
                        provident repudiandae. Accusantium aliquam, asperiores commodi ipsam similique velit
                        voluptates!</p>
                </Grid>
            </Grid>
            <Grid className="reviewItems">
                <Grid className="reviewImg">
                    <img src='/images/product-details/author2.png' alt="author1"/>
                </Grid>
                <Grid className="reviewContent">
                    <h2><Link href="/">Joseph L. Dorsey</Link></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi deleniti
                        doloremque eos illum officiis, perferendis quidem. Architecto incidunt magni
                        provident repudiandae.</p>
                    <ListItem className="reviewItems">
                        <Grid className="reviewImg">
                            <img src='/images/product-details/author.png' alt="author1"/>
                        </Grid>
                        <Grid className="reviewContent">
                            <h2><Link href="/">Joseph L. Dorsey</Link></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi
                                deleniti
                                doloremque eos illum officiis, perferendis quidem. Architecto incidunt magni
                                provident repudiandae.</p>
                        </Grid>
                    </ListItem>
                </Grid>
            </Grid>
            <Grid className="reviewItems">
                <Grid className="reviewImg">
                    <img src='/images/product-details/author2.png' alt="author2"/>
                </Grid>
                <Grid className="reviewContent">
                    <h2><Link href="/">Joseph L. Dorsey</Link></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi
                        deleniti
                        doloremque eos illum officiis, perferendis quidem. Architecto incidunt magni
                        provident repudiandae.</p>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Reviews;