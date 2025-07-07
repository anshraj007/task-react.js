import React,{ useContext } from "react";
import { Postcontext } from "./context/Postcontext";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination =() => {
    const {posts,postPerPage,currentPage,setCurrentPage} = useContext(Postcontext);
    const totalPages = Math.ceil (posts.length / postPerPage );

    const handlechange = () => setCurrentPage(value);

    return(
        <Stack spacing={2} mt={4} alignItems="center">
            <MuiPagination
              count={totalPages}
              page={currentPage}
              onChange={handlechange}
              color="primary"
              />
        </Stack>
    );
};

export default Pagination;
