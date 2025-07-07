import  React, { useContext } from "react";
import { Postcontext } from "./context/Postcontext";
import { PostsGrid } from "./context/PostsGrid";
import { Pagination } from "./context/Pagination";
import { CircularProgress,Box, Typography } from "@mui/material";


const App = () =>{
    const{loading} = useContext(Postcontext);

    if (loading) {
        return(
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="Center" minHeight="100vh">
                <CircularProgress />
                <Typography mt={2}>Loading posts...</Typography>
            </Box>
        );
    }
    
    return (

        <Box p={4}>
            <Typography vrient="h4" gutterButtom align="center">Posts Viewer</Typography>
            <PostsGrid />
            <Pagination />
        </Box>
    );
};


export default App;