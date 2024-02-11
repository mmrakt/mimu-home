import { useEffect, useState } from "react";
import { RAINDROP_API_BASE_URL } from "../constants";
import Post from "./Post";
import { dummyPosts } from "../constants/dummy";
import SkeletonPost from "./SkeletonPost";

const Posts = () => {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
      <PostsInner />
    </ul>
  );
};

const PostsInner = () => {
  const [posts, setPosts] = useState<any[] | undefined>();

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
    //   setPosts(result.items);
    // })();
    setPosts(dummyPosts.items);
  }, []);

  if (!posts) {
    return [...new Array(12)].map(() => <SkeletonPost />);
  } else {
    return posts.map((post) => <Post item={post} key={post._id} />);
  }
};

export default Posts;
