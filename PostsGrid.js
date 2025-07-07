import React,{ useContext } from "react";
import { Postcontext } from "./context/Postcontext";
import { PostCard } from "./PostCard";
import { Grid } from "@mui/material";

const PostsGrid = () => {
    const{ posts, currentPage, postsPerpage} = useContext(Postcontext);

    const indexOflast = currentPage * postsPerpage;
    const indexOfFirst = indexOflast- postsPerpage;
    const currentPosts =  posts.slice(indexOfFirst, indexOflast);


    return(
        <Grid container spacing = {2}>
            {currentPosts.map((post) =>(
                <grid item xs={12} sm={6} md={4} key={post.id}>
                    <PostCard post={post} />                
                </grid>
            ))}
        </Grid>
    );
};


export default PostsGrid;