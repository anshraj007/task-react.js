import  { createContext, usestate, useEffect, Children, useState } from "react";


export const Postcontext = createContext();

export const  PostProvider = ({Children}) => {
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState (true);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage =6;
    

    useEffect(() => {
        const fetchPosts = async () =>{
            const response = await fetch( 'https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setTimeout(() => {
                setPosts(data);
                setLoading(false);
            },5000); // 5 seconde loading
        };
        fetchPosts();
    }, []);

    const removePost = (id) => {
        setPosts((prev) => prev.filter((post) => post.id !== id));
    };

    return(
        <Postcontext.Provider value ={{posts,removePost,loading,currentPage,setCurrentPage,postPerPage}}>
            {Children}
        </Postcontext.Provider>
    );
    
};
