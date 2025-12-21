import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostCard from "./PostCard";
const PostList = ()=>{
    const {posts}=useContext(PostContext);
    return(
        <div className="grid">{posts.map((post)=>(
            <PostCard key={post.id}
            post={post}/>
        ))}
        </div>
    );
}
export default PostList;