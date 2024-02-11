import { useEffect, useState } from "react";
// import { RAINDROP_API_BASE_URL } from "../constants";
import Post from "./Post";
import { dummyPosts } from "../constants/dummy";

const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // (async () => {
    //   const response = await fetch(
    //     `${RAINDROP_API_BASE_URL}/raindrops/36744205`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${
    //           import.meta.env.VITE_RAINDROP_ACCESS_TOKEN
    //         }`,
    //       },
    //     }
    //   );
    //   const result = await response.json();
    //   setPosts(result);
    // })();
    setPosts(dummyPosts.items);
  }, []);
  return (
    <ul className="grid grid-cols-4 gap-5 mt-10">
      {posts.map((post) => (
        <Post item={post} key={post._id} />
      ))}
    </ul>
  );
};

export default Posts;
