import { createContext,useEffect,useState } from "react";

export const PostContext= createContext();
export const PostsProvider=({childern})=>{
    const[posts,setPosts]=([]);
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> res.json())
    .then((data)=>setPosts(data.slice(0,20)));

},[]);
const UpdatePost =(id,updatedPost)=>{
    setPosts((prev)=>
    prev.map((post)=>
    post.id===id?
{ ...post,...updatedPost }:post
)
);
};
const deletePost=(id)=>{
    setPosts((prev)=> prev.filter((post)=>post.id!== id));
};
return(
    <PostContext.Provider value={{
        posts, UpdatePost,deletePost
    }}>
        {childern}
    </PostContext.Provider>
);
}