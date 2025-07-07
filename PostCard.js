import React,{ useContext } from "react";
import { Postcontext } from "../context/Postcontext";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { ClaoseIcon } from "@mui/icons-material/Close";

const PostCard = ({post}) => {
    const { removePost } =useContext(Postcontext);


    return (
        <Card>
            <CardContent>
                <IconButton
                  aria-label="remove"
                  style={{ float: 'right', color: 'red'}}
                  onClick={() => removePost(post.id)}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{post.body}</Typography>
            </CardContent>
        </Card>
    );
};

export default PostCard;